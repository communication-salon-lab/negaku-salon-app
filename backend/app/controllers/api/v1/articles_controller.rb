class Api::V1::ArticlesController < ApplicationController
  before_action :authenticate_admin!, only: [:create, :update, :destroy]

  def index
    resp = ddb.scan(table_name: articles_table)
    items = resp.items.map { |it|
      created =
        begin
          Date.parse(it["event_date"].to_s).to_time.utc.iso8601
        rescue
          Time.now.utc.iso8601
        end
        content = it["content"].to_s
      {
        id:         it["id"],
        title:      it["title"],
        body:       content,
        content:    content,
        category:   it["category"] || "お知らせ",
        created_at: created
      }
    }
    items.sort_by! { |h| h[:created_at] }.reverse!
    render json: items
  end

  def show
    r = ddb.get_item(table_name: articles_table, key: { "id" => params[:id] })
    return render json: { error: "Not Found" }, status: :not_found unless r.item

    it = r.item
    created =
      begin
        Date.parse(it["event_date"].to_s).to_time.utc.iso8601
      rescue
        Time.now.utc.iso8601
      end

    content = it["content"].to_s
    render json: {
      id:         it["id"],
      title:      it["title"],
      body:       content,
      content:    content,
      category:   it["category"] || "お知らせ",
      created_at: created
    }
  end

  # 作成
  def create
    authenticate_admin!
    src = params[:article].presence || params
    id = SecureRandom.uuid
    event_date = (src[:event_date].presence || Date.today.to_s)
    item = {
      "title"      => src[:title].to_s,
      "content"    => src[:content].presence || src[:body].to_s,
      "content"    => params[:content].presence || params[:body].to_s,  # フォーム名どちらでもOK
      "event_date" => event_date
    }
    item["category"] = src[:category].to_s if src[:category].present?

    ddb.put_item(table_name: articles_table, item: item)
    render json: { id: id }, status: :created
  end

  # 更新
  def update
    authenticate_admin!
    id = params[:id]
    cur = ddb.get_item(table_name: articles_table, key: { "id" => id }).item
    return render json: { error: "Not Found" }, status: :not_found unless cur

    src = params[:article].presence || params
    item = {
      "id"         => id,
      "title"      => src[:title].presence   || cur["title"],
      "content"    => (src[:content].presence || src[:body]).presence || cur["content"],
      "event_date" => src[:event_date].presence || cur["event_date"]
    }
    item["category"] = src[:category].presence || cur["category"] if cur.key?("category") || src[:category].present?
    ddb.put_item(table_name: articles_table, item: item)
    head :no_content
  end

  def destroy
    authenticate_admin!
    ddb.delete_item(table_name: articles_table, key: { "id" => params[:id] })
    head :no_content
  end
end

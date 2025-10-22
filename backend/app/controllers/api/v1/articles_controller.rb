class Api::V1::ArticlesController < ApplicationController
  before_action :authenticate_admin!, only: %i[create update destroy]

  def index
    resp = ddb.scan(table_name: articles_table)
    items = resp.items.map do |it|
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
        category:   (it["category"].presence || "お知らせ"),
        created_at: created
      }
    end
    items.sort_by! { |h| h[:created_at] }.reverse!
    render json: items
  end

  def show
    r = ddb.get_item(table_name: articles_table, key: { "id" => params[:id].to_s })
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
      category:   (it["category"].presence || "お知らせ"),
      created_at: created
    }
  end

  def create
    src = params[:article].presence || params
    id  = SecureRandom.uuid
    item = {
      "id"         => id,
      "title"      => src[:title].to_s,
      "content"    => (src[:content].presence || src[:body]).to_s, # フォーム名どちらでもOK
      "event_date" => (src[:event_date].presence || Date.today.to_s),
      "category"   => (src[:category].presence || "お知らせ")
    }
    ddb.put_item(table_name: articles_table, item: item)
    render json: { id: id }, status: :created
  end

  def update
    id  = params[:id].to_s
    cur = ddb.get_item(table_name: articles_table, key: { "id" => id }).item
    return render json: { error: "Not Found" }, status: :not_found unless cur

    src = params[:article].presence || params
    item = {
      "id"         => id,
      "title"      => (src[:title].presence   || cur["title"]),
      "content"    => (src[:content].presence || src[:body].presence || cur["content"]),
      "event_date" => (src[:event_date].presence || cur["event_date"]),
      "category"   => (src[:category].presence || cur["category"])
    }
    ddb.put_item(table_name: articles_table, item: item)
    head :no_content
  end

  def destroy
    ddb.delete_item(table_name: articles_table, key: { "id" => params[:id].to_s })
    head :no_content
  end
end

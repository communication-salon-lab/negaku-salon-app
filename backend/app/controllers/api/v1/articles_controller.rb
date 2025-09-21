class Api::V1::ArticlesController < ApplicationController
  before_action :authenticate_admin!, only: [:create, :update, :destroy]
  TABLE_NAME = "Articles"

  def index
    resp = DYNAMO_CLIENT.scan(table_name: TABLE_NAME)
    articles = resp.items.map do |item|
      {
        id: item["id"],
        title: item["title"],
        content: item["content"],
        event_date: item["event_date"]
      }
    end

    # event_dateでソート
    render json: articles.sort_by { |a| a[:event_date].to_s }.reverse
  end

  def show
    resp = DYNAMO_CLIENT.get_item(
      table_name: TABLE_NAME,
      key: { "id" => params[:id] }
    )
    if resp.item
      render json: resp.item
    else
      render json: { error: "Not Found" }, status: :not_found
    end
  end

  def create
    id = SecureRandom.uuid
    item = {
      "id" => id,
      "title" => params[:title],
      "content" => params[:content],
      "event_date" => params[:event_date] || Date.today.to_s
    }
    DYNAMO_CLIENT.put_item(table_name: TABLE_NAME, item: item)
    render json: item, status: :created
  end

  def update
    # put_itemで上書きする
    id = params[:id]
    item = {
      "id" => id,
      "title" => params[:title],
      "content" => params[:content],
      "event_date" => params[:event_date]
    }
    DYNAMO_CLIENT.put_item(table_name: TABLE_NAME, item: item)
    render json: item
  end

  def destroy
    DYNAMO_CLIENT.delete_item(table_name: TABLE_NAME, key: { "id" => params[:id] })
    head :no_content
  end
end

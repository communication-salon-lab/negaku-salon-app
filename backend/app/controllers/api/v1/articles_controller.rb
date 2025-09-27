class Api::V1::ArticlesController < ApplicationController
  before_action :authenticate_admin!, only: [:create, :update, :destroy]
  def index
    ddb = Aws::DynamoDB::Client.new(region: ENV.fetch("AWS_REGION","ap-northeast-1"))
    resp = ddb.scan(table_name: ENV.fetch("ARTICLES_TABLE","articles"))
    items = resp.items.map { |it|
      { id: it["id"], title: it["title"], body: it["body"], published_at: it["published_at"] }
    }
    render json: items
  end

  def show
    resp = ddb.get_item(
      table_name: ENV.fetch("ARTICLES_TABLE","articles"),
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
    ddb.put_item(table_name: ENV.fetch("ARTICLES_TABLE","articles"), item: item)
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
    ddb.put_item(table_name: ENV.fetch("ARTICLES_TABLE","articles"), item: item)
    render json: item
  end

  def destroy
    ddb.delete_item(table_name: ENV.fetch("ARTICLES_TABLE","articles"), key: { "id" => params[:id] })
    head :no_content
  end
end

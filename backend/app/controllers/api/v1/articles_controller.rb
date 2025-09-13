class Api::V1::ArticlesController < ApplicationController
  before_action :authenticate_admin!, only: [:create, :update, :destroy]

  def index
    articles = Article.order(created_at: :desc) # 作成日の新しい順で取得
    render json: articles
  end

  def show
    article = Article.find(params[:id])
    render json: article
  end

  def create
    article = Article.new(article_params)
    if article.save
      render json: article, status: :created
    else
      render json: article.errors, status: :unprocessable_entity
    end
  end

  def update
    article = Article.find(params[:id])
    if article.update(article_params)
      render json: article
    else
      render json: article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy
    head :no_content # 成功したらHTTPステータス204を返す
  end

  private

  # Strong Parameters: 不正なパラメータを防ぐ
  def article_params
    params.require(:article).permit(:title, :event_date, :category, :content)
  end
  
end

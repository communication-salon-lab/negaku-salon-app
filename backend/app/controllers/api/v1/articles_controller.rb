class Api::V1::ArticlesController < ApplicationController
  before_action :authenticate_admin!, only: %i[create update destroy]

  def index
    articles = Article.order(created_at: :desc)
    items = articles.map do |article|
      {
        id:         article.id,
        title:      article.title,
        body:       article.content,
        content:    article.content,
        category:   article.category || "お知らせ",
        created_at: article.created_at.iso8601
      }
    end
    render json: items
  end

  def show
    article = Article.find_by(id: params[:id])
    return render json: { error: "Not Found" }, status: :not_found unless article

    render json: {
      id:         article.id,
      title:      article.title,
      body:       article.content,
      content:    article.content,
      category:   article.category || "お知らせ",
      created_at: article.created_at.iso8601
    }
  end

  def create
    src = params[:article].presence || params
    
    article = Article.new(
      title: src[:title].to_s,
      content: src[:content].presence || src[:body].to_s,
      category: src[:category].presence || "お知らせ",
      event_date: src[:event_date].presence || Date.today
    )

    if article.save
      render json: { id: article.id }, status: :created
    else
      render json: { errors: article.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    authenticate_admin!
    article = Article.find_by(id: params[:id])
    return render json: { error: "Not Found" }, status: :not_found unless article

    src = params[:article].presence || params
    
    if article.update(
      title: src[:title].presence || article.title,
      content: (src[:content].presence || src[:body]).presence || article.content,
      category: src[:category].presence || article.category,
      event_date: src[:event_date].presence || article.event_date
    )
      head :no_content
    else
      render json: { errors: article.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    authenticate_admin!
    article = Article.find_by(id: params[:id])
    return render json: { error: "Not Found" }, status: :not_found unless article
    
    article.destroy
    head :no_content
  end
end

# frozen_string_literal: true

module Admin
  class ArticlesController < ApplicationController

    def index
      @title = "Articles"

      @query_status = params[:status]
      @query_category_id = params[:category_id]

      query = Article.order(id: :desc).includes(:category)
      query = query.where(status: @query_status) if @query_status.present?
      query = query.where(category_id: @query_category_id) if @query_category_id.present?

      @categories = Category.all
      @articles = query.page params[:page]

      render "admin/article"
    end

    def new
      redirect_to "/admin"
    end

    def create
      @article = Article.new(article_params)
      @article.save
      redirect_to "/admin/articles"
    end

    def show
      @article = Article.find(params[:id])
      redirect_to "/articles/#{params[:id]}"
    end

    def edit
      @categories = Category.all
      @category_options = @categories.map { |c| [c.name, c.id] }
      @article_id = params[:id]
      @article = Article.find(@article_id)
      @title = "Edit #{@article.title}"
      @submit_url = admin_article_path(@article)
      render "admin/editor"
    end

    def update
      @article = Article.find(params[:id])
      @article.update(article_params)
      redirect_to "/admin/articles"
    end

    def destroy
      @article = Article.find(params[:id])
      unless @article.nil?
        @article.destroy
      end
      if params[:redirect].nil?
        redirect_to "/admin/articles"
      else
        redirect_to params[:redirect]
      end
    end

    private

    def article_params
      params.require(:article).permit(:title, :content, :status, :created_at, :category_id)
    end

  end
end

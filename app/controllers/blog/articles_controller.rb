# frozen_string_literal: true

module Blog
  class ArticlesController < Blog::ApplicationController

    def show
      @article = Article.where(id: params[:id], status: "published").first
      if @article.nil?
        set_page_title "Not found"
        return render "blog/404", status: 404
      end
      set_page_title @article.title
      render "blog/article"
    end

    def feed
      @title = @blog_mates[:blog_name]
      @articles = Article.where(status: "published").order(created_at: :desc).all
      render "blog/feed", content_type: "application/rss+xml"
    end
  end
end

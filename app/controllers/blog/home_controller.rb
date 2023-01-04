# frozen_string_literal: true

module Blog
  class HomeController < Blog::ApplicationController
    def index
      @page_title = @blog_mates[:blog_name]
      @articles = Article.where(status: "published").order(id: :desc).all
      @categories = Category.all
      render "blog/index"
    end

  end
end
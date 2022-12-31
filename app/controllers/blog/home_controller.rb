# frozen_string_literal: true

module Blog
  class HomeController < Blog::ApplicationController
    def index
      @title = @blog_name
      @articles = Article.order(id: :desc).all
      @categories = Category.all
      render "blog/index"
    end

  end
end
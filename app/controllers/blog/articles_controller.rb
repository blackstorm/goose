# frozen_string_literal: true

module Blog
  class ArticlesController < Blog::ApplicationController

    def show
      @article = Article.find(params[:id])
      @title = "#{@article.title} - #{@blog_name}"
      render "blog/article"
    end

  end
end

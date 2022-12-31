# frozen_string_literal: true

module Blog
  class CategoriesController < Blog::ApplicationController

    def show
      @category = Category.find(params[:id])
      @categories = Category.all
      @articles = Article.where(category_id: @category.id).order(id: :desc).all
      @title = "#{@category.name} - #{@blog_name}"
      render "blog/category"
    end

  end
end

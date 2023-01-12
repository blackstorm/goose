# frozen_string_literal: true

module Blog
  class CategoriesController < Blog::ApplicationController

    def show
      @category = Category.find(params[:id])
      @categories = Category.all
      @articles = Article.where(category_id: @category.id, status: "published").order(id: :desc).all
      set_page_title @category.name
      render "blog/category"
    end

  end
end

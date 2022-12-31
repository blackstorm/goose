# frozen_string_literal: true

module Admin
  class CategoriesController < Admin::ApplicationController

    def index
      @title = "Categories"
      @category = Category.new(created_at: Time.now)
      @categories = Category.all
      @submit_url = admin_categories_path
      render "admin/category"
    end

    def create
      @category = Category.new(category_params)
      if @category.save
        redirect_to admin_categories_path
      else
        render "admin/category"
      end
    end

    def edit
      @category = Category.find(params[:id])
      @title = "Update #{@category.name} category"
      @categories = Category.all
      @submit_url = admin_category_path(@category)
      render "admin/category"
    end

    def update
      @category = Category.find(params[:id])
      if @category.update(category_params)
        redirect_to admin_categories_path
      else
        render "admin/category"
      end
    end

    def destroy
      @category = Category.find(params[:id])
      @category.destroy
      redirect_to admin_categories_path
    end

    private

    def category_params
      params.require(:category).permit(:name)
    end

  end
end

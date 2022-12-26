class AdminController < ApplicationController

  layout "admin"

  def index
    render "admin/index"
  end

  def article
    render "admin/article"
  end

  def category
    render "admin/category"
  end

end

require 'bcrypt'

class InstallController < ApplicationController
  before_action :check_installed
  skip_before_action :require_install

  def index
    @title = "Install"
    render "install/index", layout: "common"
  end

  def install
    Option.transaction do
      Option.create(key: "blog_name", value: params[:blog_name])
      Option.create(key: "admin_username", value: params[:admin_username])
      Option.create(key: "admin_password", value: BCrypt::Password.create(params[:admin_password]))
      Option.create(key: "goose_installed_at", value: Time.now.to_s)
      category = Category.create(name: "Default")
      Article.create(title: "Hello world", content: "I am using goose blog!", category_id: category.id, status: "published")
      $is_goose_installed = true
    end
    redirect_to root_path
  end

  private

  def check_installed
    redirect_to root_path if $is_goose_installed
  end

  def install_params
    params.require(:install).permit(:blog_name, :admin_username, :admin_password)
  end

end

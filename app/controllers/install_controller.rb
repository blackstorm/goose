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
      options = [
        { key: "blog_name", value: params[:blog_name] },
        { key: "blog_background_color", value: "#fff" },
        { key: "admin_username", value: params[:admin_username] },
        { key: "admin_password", value: BCrypt::Password.create(params[:admin_password]) },
        { key: "goose_installed_at", value: Time.now.to_s },
      ]
      Option.insert_all! options
      create_hello_world_article
      $is_goose_installed = true
    end
    redirect_to root_path
  end

  private

  def create_hello_world_article
    category_id = Category.create!(name: "Default").id
    Article.create!(title: "Hello world", content: "I am using goose blog!", category_id: category_id, status: "published")
  end

  def check_installed
    redirect_to root_path if $is_goose_installed
  end

end

# frozen_string_literal: true
require 'bcrypt'

class LoginController < ApplicationController
  layout "common"

  def index
    return redirect_to admin_root_path if session[:admin]
    @title = "Login"
    @blog_name = Option.where(key: "blog_name").first.value
    render "login/index"
  end

  def create
    return redirect_to admin_root_path if session[:admin]
    username = Option.where(key: "admin_username").first
    password = Option.where(key: "admin_password").first
    if username && password
      if username.value == params[:username] && BCrypt::Password.new(password.value) == params[:password]
        session[:admin] = username.value
        redirect_to admin_root_path
      else
        flash.now[:alert] = "Invalid username or password!"
        render "login/index", status: :forbidden
      end
    else
      redirect_to login_index_path
    end
  end


  private

  def login_param
    params.require(:login).permit(:username, :password)
  end

end

# frozen_string_literal: true
require 'bcrypt'
require 'fileutils'

module Admin
  class SettingsController < Admin::ApplicationController

    SETTING_KEYS = %w(blog_name blog_background_color admin_username admin_password site_favicon)

    def index
      @title = "Settings"
      @settings = Option.where(key: SETTING_KEYS)
                        .map { |option| [option.key.to_sym, option.value] }
                        .to_h
      @is_disable_update_admin = is_disabled_update_admin
      render "admin/setting"
    end

    def update
      form_params = setting_params.clone

      update_favicon form_params
      update_admin form_params unless is_disabled_update_admin

      form_params.except(:site_favicon, :admin_username, :admin_password).each do |key, value|
        option = Option.where(key: key).first
        if option.nil?
          Option.create!(key: key, value: value)
        else
          option.update!(value: value) if option.value != value
        end
      end

      flash[:notice] = "Settings updated successfully."
      redirect_to admin_settings_path
    end

    private

    def update_favicon(params)
      if params[:site_favicon].present?
        FaviconUploader.new.store! params[:site_favicon]
      end
    end

    def update_admin(params)
      username = Option.where(key: "admin_username").first!
      password = Option.where(key: "admin_password").first!

      if username.value != params[:admin_username]
        username.update!(value: params[:admin_username])
        session[:admin] = nil
      end
      if password.value != params[:admin_password]
        password.update!(value: BCrypt::Password.create(value))
        session[:admin] = nil
      end
    end

    def is_disabled_update_admin
      ENV["DISABLE_UPDATE_ADMIN_SETTING"].present?
    end

    def setting_params
      params.permit(SETTING_KEYS)
    end

  end
end

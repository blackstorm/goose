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
      render "admin/setting"
    end

    def update
      args = setting_params.clone

      update_password(args[:admin_password])
      args.delete(:admin_password)

      if args[:site_favicon].present?
        update_favicon(args[:site_favicon])
        args.delete(:site_favicon)
      end

      args.each do |key, value|
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

    def update_favicon(uploaded_io)
      FaviconUploader.new.store! uploaded_io
    end

    def update_password(value)
      return if value.blank?
      password = Option.where(key: "admin_password").first!
      if password.value != value
        password.update!(value: BCrypt::Password.create(value))
        session[:admin] = nil
      end
    end

    def setting_params
      params.permit(SETTING_KEYS)
    end

  end
end

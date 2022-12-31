# frozen_string_literal: true
require 'bcrypt'

module Admin
  class SettingsController < Admin::ApplicationController

    SETTING_KEYS = %w(blog_name admin_username admin_password)

    def index
      @title = "Settings"

      @settings = Option.where(key: SETTING_KEYS)
                        .map { |option| [option.key.to_sym, option.value] }
                        .to_h
      render "admin/setting"
    end

    def update
      setting_params.each do |key, value|
        if key == "admin_password"
          update_password(value)
          next
        end
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

    def update_password(value)
      return if value.blank?
      password = Option.where(key: "admin_password").first!
      if password.value != value
        password.update!(value: BCrypt::Password.create(value))
      end
      session[:admin] = nil
    end

    def setting_params
      params.permit(SETTING_KEYS)
    end

  end
end

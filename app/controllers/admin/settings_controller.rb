# frozen_string_literal: true

module Admin
  class SettingsController < Admin::ApplicationController

    def index
      @title = "Settings"

      load_settings
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

      flash[:alert] = 'Successfully update!'
      redirect_to admin_settings_path
    end

    private

    def update_password(value)
      password = Option.where(key: "admin_password").first
      if password.value != value
        password.update!(value: BCrypt::Password.create(value))
      end
    end

    def load_settings
      @settings = {
        :blog_name => Option.where(key: "blog_name").first.value,
        :admin_username => Option.where(key: "admin_username").first.value,
        :admin_password => Option.where(key: "admin_password").first.value
      }
    end

    def setting_params
      params.permit(:blog_name, :admin_username, :admin_password)
    end

  end
end

# frozen_string_literal: true

module Admin
  class SettingsController < Admin::ApplicationController

    def index
      @title = "Settings"
      render "admin/setting"
    end

    def update

    end

  end
end

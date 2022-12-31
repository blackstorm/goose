# frozen_string_literal: true

module Admin
  class LogoutController < Admin::ApplicationController

    def logout
      session[:admin] = nil
      redirect_to login_index_path
    end

  end
end


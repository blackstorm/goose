# frozen_string_literal: true

module Admin

  class ApplicationController < ::ApplicationController
    layout "admin"

    before_action :require_login

    private

    def require_login
      redirect_to login_index_path unless session[:admin]
    end

  end

end

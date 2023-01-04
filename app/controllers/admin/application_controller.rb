# frozen_string_literal: true

module Admin

  class ApplicationController < ::ApplicationController
    layout "admin"

    before_action :require_login, :set_require_template_values

    private

    def set_require_template_values
      @blog_name = Option.where(key: "blog_name").first.value
      @title = @blog_name
    end

    def require_login
      redirect_to login_index_path unless session[:admin]
    end

  end

end

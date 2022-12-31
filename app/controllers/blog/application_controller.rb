# frozen_string_literal: true

module Blog
  class ApplicationController < ::ApplicationController

    layout "blog"
    before_action :set_meta_values

    private

    def set_meta_values
      @blog_name = Option.where(key: "blog_name").first.value
    end

  end
end
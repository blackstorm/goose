# frozen_string_literal: true

module Blog
  class ApplicationController < ::ApplicationController
    META_KEYS = %w(blog_name blog_background_color)

    layout "blog"
    before_action :set_meta_values

    private

    def set_page_title(title)
      @page_title = "#{title} - #{@blog_mates[:blog_name]}"
    end

    def set_meta_values
      @blog_mates = Option.where(key:META_KEYS).map { |option| [option.key.to_sym, option.value] }.to_h
    end

  end
end
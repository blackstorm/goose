# frozen_string_literal: true

module Admin
  class ImagesController < Admin::ApplicationController

    def create
      image = params[:image]
      return render json: {ok: false, message: "Failed to get image param"}, status: 400 if image.blank?

      uploader = ImageUploader.new
      uploader.store! image

      render json: {ok: true, url: uploader.url}
    end

  end
end


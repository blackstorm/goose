# frozen_string_literal: true

module Admin
  class ImagesController < Admin::ApplicationController

    def create
      image = params[:image]
      if image.blank?
        return render json: {ok: false, message: "Can't get upload image."}, status: 400
      end

      uploader = ImageUploader.new
      uploader.store! image

      render json: {ok: true, url: uploader.url}
    end

  end
end


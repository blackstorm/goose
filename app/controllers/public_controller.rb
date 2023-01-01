# frozen_string_literal: true

class PublicController < ApplicationController

  def uploads
    filename = params[:filename]
    path = "#{ENV["GOOSE_DATA_PATH"] || Rails.root.join("data/uploads")}/#{filename}.#{params[:format]}"
    if File.exist?(path)
      send_file path
    else
      render plain: "Not found", status: 404
    end
  end

end

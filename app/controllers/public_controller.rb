# frozen_string_literal: true
require 'pathname'

class PublicController < ApplicationController

  def uploads
    filename = params[:filename]
    format = params[:format]

    target = "#{ENV["GOOSE_DATA_PATH"]}/uploads/#{filename}"
    target = "#{target}.#{format}" if format.present?
    path = Pathname.new(target)

    return send_file path if path.file?
    render plain: "Not found", status: 404
  end

end

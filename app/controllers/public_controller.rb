# frozen_string_literal: true
require 'pathname'

class PublicController < ApplicationController

  before_action :base_uploads_path

  def uploads
    format = params[:format]

    target = "#{@base_uploads_path}#{params[:path]}"
    target = "#{target}.#{format}" if format.present?
    path = Pathname.new(target)

    if path.file?
      response.headers['Content-Length'] = File.size(path).to_s
      return send_file path, x_sendfile: true, disposition: "inline"
    end
    render plain: "Not found", status: 404
  end

  private

  def base_uploads_path
    @base_uploads_path = "#{ENV["GOOSE_DATA_PATH"]}/uploads/"
  end

end

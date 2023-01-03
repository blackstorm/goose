# frozen_string_literal: true
require 'pathname'

class PublicController < ApplicationController

  def uploads
    format = params[:format]

    target = "#{ENV["GOOSE_DATA_PATH"]}/uploads/#{params[:path]}"
    target = "#{target}.#{format}" if format.present?
    path = Pathname.new(target)

    if path.file?
      response.headers['Content-Length'] = File.size(path).to_s
      return send_file path, x_sendfile: true, disposition: "inline"
    end
    render plain: "Not found", status: 404
  end

end

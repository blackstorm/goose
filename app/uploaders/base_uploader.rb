# frozen_string_literal: true

class BaseUploader < CarrierWave::Uploader::Base

  storage :file

  def store_dir
    "#{ENV["GOOSE_DATA_PATH"]}/uploads"
  end

end

# frozen_string_literal: true

class BaseUploader < CarrierWave::Uploader::Base
  @@store_at = "#{ENV["GOOSE_DATA_PATH"]}/uploads"

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  def store_dir
    @@store_at
  end

end

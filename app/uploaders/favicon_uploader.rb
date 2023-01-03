class FaviconUploader < BaseUploader

  def extension_allowlist
    %w(ico)
  end

  def filename
    "favicon.ico" if original_filename
  end

end

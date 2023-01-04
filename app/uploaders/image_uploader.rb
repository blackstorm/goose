class ImageUploader < BaseUploader

  def extension_allowlist
    %w(jpg jpeg gif png webp)
  end

  def url
    @url = "/public/uploads/#{@path}"
  end

  def filename
    @name ||= SecureRandom.uuid
    @path = "images/#{Time.now.year}/#{@name}.#{file.extension.downcase}"
    @path
  end

end

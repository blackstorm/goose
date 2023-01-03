class ImageUploader < BaseUploader

  def extension_allowlist
    %w(jpg jpeg gif png)
  end

  def url
    @url = "/public/uploads/#{@path}"
  end

  def filename
    @name ||= SecureRandom.uuid
    @path = "#{Time.now.year}/#{Time.now.month}/#{@name}.#{file.extension.downcase}"
    @path
  end

end

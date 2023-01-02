require "pathname"

module ApplicationHelper

  def blog_favicon
    favicon = Pathname.new("#{ENV['GOOSE_DATA_PATH']}/uploads/favicon.ico")
    favicon_link_tag "/public/uploads/favicon.ico" if favicon.exist?
  end

end

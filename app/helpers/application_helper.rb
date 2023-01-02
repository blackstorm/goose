require "pathname"

module ApplicationHelper

  def blog_favicon
    favicon = Pathname.new("#{ENV['GOOSE_DATA_PATH']}/uploads/favicon.ico")
    favicon_link_tag "/public/uploads/favicon.ico" if favicon.exist?
  end

  def admin_nav_link(name, path)
    link_to name, path, class: class_names("admin-nav-link", { "text-gray-800": current_page?(path) })
  end

end

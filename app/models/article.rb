require "redcarpet"

class Article < ApplicationRecord
  paginates_per 10

  belongs_to :category

  def is_published?
    self.status == "published"
  end

  def is_draft?
    self.status == "draft"
  end

  RENDERDER = Redcarpet::Markdown.new(Redcarpet::Render::HTML, {
    no_styles: true,
    autolink: true,
    tables: true,
    fenced_code_blocks: true
  })

  def content_to_html
    RENDERDER.render(self.content)
  end

  def created_at_datetime_local_field
    self.created_at.strftime("%Y-%m-%dT%H:%M")
  end

end

require 'kramdown'

class Article < ApplicationRecord

  belongs_to :category

  def is_published?
    self.status == "published"
  end

  def is_draft?
    self.status == "draft"
  end

  def content_to_html
    Kramdown::Document.new(self.content).to_html
  end

  def created_at_datetime_local_field
    self.created_at.strftime("%Y-%m-%dT%H:%M")
  end

end

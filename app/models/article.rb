class Article < ApplicationRecord

  def is_published?
    self.status == "published"
  end

  def is_draft?
    self.status == "draft"
  end

end

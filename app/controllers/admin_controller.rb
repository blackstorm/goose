class AdminController < ApplicationController

  layout "admin"

  def index
    @categories = Category.all
    @category_options = @categories.map { |c| [c.name, c.id] }

    @article = Article.new
    @article.created_at = DateTime.current
    @article.category_id = @categories[0].id
    @submit_url = admin_articles_path(@article)
    render "admin/editor"
  end

end

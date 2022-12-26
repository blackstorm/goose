class AdminController < ApplicationController

  layout "admin"

  def index
    @categories = Category.all
    @category_options = @categories.map { |c| [c.name, c.id] }

    @article = Article.new
    @article.created_at = DateTime.current
    @article.category_id = @categories[0].id
    @post_url = "/admin/article"
    render "admin/editor"
  end

  def get_article
    @articles = Article.order(id: :desc).all
    render "admin/article"
  end

  def create_article
    @article = Article.new(article_params)
    @article.status = "published"
    @article.save
    redirect_to "/admin/article"
  end

  def edit_article
    @article = Article.find(params[:id])
    @article.update(article_params)
    redirect_to "/admin/article"
  end

  def get_edit_article
    @categories = Category.all
    @category_options = @categories.map { |c| [c.name, c.id] }
    @article_id = params[:id]
    @article = Article.find(@article_id)
    @post_url = "/admin/articles/" + @article_id
    render "admin/editor"
  end

  def get_category
    @categories = Category.order(id: :desc).all
    render "admin/category"
  end

  private

  def article_params
    params.require(:article).permit(:title, :content, :created_at, :category_id)
  end

end

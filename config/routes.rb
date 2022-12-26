Rails.application.routes.draw do
  root "home#index"

  get "/admin", to: "admin#index"
  get "/admin/article", to: "admin#get_article"
  post "/admin/article", to: "admin#create_article"
  post "/admin/article/create", to: "admin#create_article"
  get "/admin/articles/:id/edit", to: "admin#get_edit_article"
  post "/admin/articles/:id", to: "admin#edit_article"
  post "/admin/articles/:id/edit", to: "admin#edit_article"

  get "/admin/category", to: "admin#get_category"
end

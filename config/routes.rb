Rails.application.routes.draw do
  root "home#index"

  get "/admin", to: "admin#index"
  get "/admin/article", to: "admin#article"
end

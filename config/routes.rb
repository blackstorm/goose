Rails.application.routes.draw do
  root "home#index"

  get "/_/install", to: "install#index", as: :install
  post "/_/install", to: "install#install", as: :install_post

  get "/admin", to: "admin#index"

  namespace :admin do
    resources :articles
  end

end

Rails.application.routes.draw do
  root "home#index"

  get "/_/install", to: "install#index", as: :install
  post "/_/install", to: "install#install", as: :install_post

  resources :login, only: [:index, :create, :destroy]

  namespace :admin do
    root :to => "index#index"
    delete "/logout", to: "logout#logout"
    resources :articles
    resources :categories
  end

end

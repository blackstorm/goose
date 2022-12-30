Rails.application.routes.draw do
  root "blog/home#index"
  get "/articles/:id", to: "blog/articles#show", as: :article
  get "/categories/:id", to: "blog/categories#show", as: :category

  resources :login, only: [:index, :create, :destroy]
  namespace :admin do
    root :to => "index#index"
    delete "/logout", to: "logout#logout"
    resources :articles
    resources :categories
    resources :settings, only: [:index, :update]
  end

  get "/_/install", to: "install#index", as: :install
  post "/_/install", to: "install#install", as: :install_post

end

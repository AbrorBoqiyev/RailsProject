Rails.application.routes.draw do
  get 'about', to: "pages#about"
  # root "articles#index"

  get "/articles", to: "articles#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#home"
end

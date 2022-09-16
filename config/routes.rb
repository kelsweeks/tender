Rails.application.routes.draw do
  resources :plants
  resources :appointments
  resources :plant_tenders
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # route to test your configuration
  post "/login", to: "sessions#create" 
  get '/me', to: "users#show"
  delete '/users', to: "users#destroy"
  post "/plants", to: "plants#create"
end

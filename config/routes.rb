Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: "posts#index"
  post "posts", to: "posts#create"
  get 'posts/:id', to: 'posts#checked'
end

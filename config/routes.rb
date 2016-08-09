Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :events do
      get :search, on: :collection
    end
  end
end

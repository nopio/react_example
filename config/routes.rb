Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :events, only: [:index, :create, :update, :destroy] do
      get :search, on: :collection
    end
  end
end

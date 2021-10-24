Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :destroy, :update] do 
      collection do 
        get 'getAccountFromEmail'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :products, only: [:create, :update, :destroy, :show, :index] do 
      resources :reviews, only: [:index, :create]
    end
    resources :reviews, only: [:destroy, :update]
    resources :carts, only: [:show, :create, :destroy]
    
  end

  root "static_pages#root"
  
end

Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy, :update] do
      collection do
        get 'getAccountFromEmail'
      end
    end
    resources :guests, only: [:show, :create] do
      collection do
        post 'upgrade_guest_to_user'
      end
    end
    resource :session, only: [:new, :create, :destroy] do
      collection do
        post 'guest_login'
      end
    end
    resources :products, only: [:create, :update, :destroy, :show, :index] do
      collection do
        get 'search_products_by_name'
        get 'get_game_images'
      end
      resources :reviews, only: [:index, :create]
    end
    resources :reviews, only: [:destroy, :update]
    resources :carts, only: [:index, :create, :destroy, :update]
    
  end

  root "static_pages#root"
  
end

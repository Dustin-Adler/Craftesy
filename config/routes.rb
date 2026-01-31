# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show destroy update] do
      collection do
        get 'getAccountFromEmail'
      end
    end
    resources :guests, only: %i[show create] do
      collection do
        post 'upgrade_guest_to_user'
      end
    end
    resource :session, only: %i[new create destroy] do
      collection do
        post 'guest_login'
      end
    end
    resources :products, only: %i[create update destroy show index] do
      collection do
        get 'search_products_by_name'
        get 'get_game_images'
      end
      resources :reviews, only: %i[index create]
    end
    resources :reviews, only: %i[destroy update]
    resources :carts, only: %i[index create destroy update]
  end

  root 'static_pages#root'
end

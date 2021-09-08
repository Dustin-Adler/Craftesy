Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :destroy, :update] do 
      collection do 
        get 'getAccountFromEmail'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :products, only: [:create, :update, :detroy, :show, :index]
  end
  root "static_pages#root"
  
end

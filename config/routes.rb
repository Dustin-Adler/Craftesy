Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:create, :update, :detroy, :show, :index]
  end
  get 'api/users/getAccountFromEmail'
  root "static_pages#root"
  
end

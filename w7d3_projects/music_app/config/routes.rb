Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :show, :new]
  resource :session, only: [:new, :create, :destroy]
  resources :bands, only: [:index, :create, :new, :edit, :show, :update, :destroy]
end

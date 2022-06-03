Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show, :index] do
    resources :subs, only: [:create, :update]
  end
  resource :sessions, only: [:new, :create, :destroy]
  resources :subs, only:[:new, :show, :index, :edit, :update]
end

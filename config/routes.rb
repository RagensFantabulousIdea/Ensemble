Rails.application.routes.draw do

  resources :invitations
  # root 'application#static'

  scope :api do
    resources :equipment
    resources :shoots
    resources :assets
    resources :projects do
      resources :invitations
    end
    resources :users do
      resources :projects
    end
    get '/login' => 'sessions#new', as: :login
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy', as: :logout
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

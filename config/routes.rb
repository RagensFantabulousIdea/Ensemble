Rails.application.routes.draw do

  # root 'application#static'

  scope :api do
    # resources :equipment
    # resources :shoots
    resources :projects, except: [:new, :edit] do
      resources :memberships, only: [:destroy]
      resources :assets, except: [:new, :edit] do
        resources :photos, except: [:new, :edit]
      end
      resources :comments, only: [:create]
      resources :invitations, only: [:create]
    end

    resources :users, except: [:new, :edit] do
      resources :projects, except: [:new, :edit]
    end

    resources :comments, only: [] do
      resources :comments, only: [:create]
    end
    post '/users/:token' => 'sessions#new'
    get '/login' => 'sessions#new', as: :login
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy', as: :logout
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end

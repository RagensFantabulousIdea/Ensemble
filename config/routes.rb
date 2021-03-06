Rails.application.routes.draw do

  # root 'application#static'

  scope :api do
    # resources :equipment
    # resources :shoots
    resources :projects, except: [:new, :edit] do
      resources :comments, only: [:create] do
        resources :comments, only: [:create]
      end
      resources :memberships, only: [:destroy]

      resources :assets, except: [:new, :edit] do
        get '/previous' => 'assets#previous'
        get '/next' => 'assets#next'
        resources :comments, only: [:create, :update, :destroy]
        resources :photos, except: [:new, :edit]
        resources :sample_photos, except: [:new, :edit]
        post '/photos/:id/selected' => 'photos#selected'
      end
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
  get '/:required1/(:optional1)/(:optional2)/(:optional3)/(:optional4)/(:optional5)' => 'application#static'
end

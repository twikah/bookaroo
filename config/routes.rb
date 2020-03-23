Rails.application.routes.draw do
  devise_for :users

  as :user do
    get '/user', to: 'books#dashboard', as: :user_root
  end

  root to: 'pages#home'

  resources :books do
    collection do
      get 'dashboard'
    end
  end
end

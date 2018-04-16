Rails.application.routes.draw do
  get 'welcome/index'

  resources :organizations do
    resources :tops do
      resources :comments
    end
    resources :meetings do
      resources :tops do
        resources :comments
      end
    end
  end
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

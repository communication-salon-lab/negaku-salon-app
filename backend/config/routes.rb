Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # ログイン用のエンドポイント
      post 'login', to: 'sessions#create'

      # ↓ここに認証が必要な他のAPIエンドポイントを追加していく
      resources :articles, only: [:index, :show, :create, :update, :destroy]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  get "/health", to: ->(env) { [200, {}, ["OK"]] }
end

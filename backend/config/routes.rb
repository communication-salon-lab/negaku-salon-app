Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # ログイン用のエンドポイント
      post 'login', to: 'sessions#create'

      # 記事API (お知らせ)
      resources :articles, only: [:index, :show, :create, :update, :destroy]
      root "articles#index"
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # ヘルスチェック用
  get "/up",     to: proc { [200, {}, ["OK"]] }
  get "/health", to: proc { [200, { "Content-Type" => "text/plain" }, ["ok"]] }
end

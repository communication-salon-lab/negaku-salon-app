Rails.application.routes.draw do
  get  "/healthz", to: "health#show"
  root to: "health#show"            # "/" にも 200 を返す
  match "/", to: "health#show", via: :head  # HEAD "/" も拾う
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  get "/health", to: proc { [200, { "Content-Type" => "text/plain" }, ["ok"]] }
end

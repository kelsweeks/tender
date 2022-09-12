class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
    def index 
        users = User.all 
        render json: users, status: :ok
    end
    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end
    private 
    def not_found(invalid) 
        render json: {error: "#{invalid.model} not found"},status: :not_found
    end
end

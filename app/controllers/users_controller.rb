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
    def create 
        user = User.create(user_params)
        render json:user, status: :created
    end
    def update 
        user = User.find(params[:id])
        User.update(user_params)
        render json:user, status: :accepted
    end
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content 

    private 
    def not_found(invalid) 
        render json: {error: "#{invalid.model} not found"},status: :not_found
    end
    def user_params
        params.permit(:username,:name,:email)
    end
end

class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record  

    def index 
        users = User.all 
        render json: users, status: :ok
    end
    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end
    def create 
        user = User.create!(user_params)
        render json:user, status: :created
    end
    def update 
        user = User.find(params[:id])
        User.update!(user_params)
        render json:user, status: :accepted
    end
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content 
    end
    
    private 
    def invalid_record(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    def not_found(invalid) 
        render json: {error: "#{invalid.model} not found"},status: :not_found
    end
    def user_params
        params.permit(:username,:name,:email)
    end
end

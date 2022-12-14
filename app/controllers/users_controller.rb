class UsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :invalid_record  

    def index 
        users = User.all 
        render json: users, status: :ok
    end
    
    def show 
        if current_user
            render json:current_user, status: :ok
        else 
            render json: {error: "not current user stored"}, status: :unauthorized
        end
    end
    
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :ok
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update 
        user = User.find(params[:id])
        User.update!(user_params)
        render json:user, status: :accepted
    end
    
    def destroy
        session.delete :user_id
    end
    

    private 
    def invalid_record(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    def user_params
        params.permit(:username,:name,:email,:password)
    end
end

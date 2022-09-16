class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found


    def current_user 
        @current_user||=User.find_by(id: session[:user_id])
    end
    # before_action :authorized
    # def authorized 
    #     return render json: {error: "Not authorized"}, status: :unauthorized
    #     unless session.include? :user.id
    private 

    def not_found(invalid) 
        render json: {errors: "#{invalid.model} not found"},status: :not_found
    end
end

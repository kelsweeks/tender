class ApplicationController < ActionController::API
    include ActionController::Cookies

    # def current_user 
    #     @current_user||= User.find(session[:user.id])
    # end
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end

class ApplicationController < ActionController::API
    include ActionController::Cookies

    # def current_user 
    #     User.find(session[:user.id])
    # end
    # before_action :authorized
    # def authorized 
    #     return render json: {error: "Not authorized"}, status: :unauthorized
    #     unless session.include? :user.id
    # end
end

class Api::SessionsController < ApplicationController

    def new
        @guest = Guest.find_by(uuid: session[:guest_uuid]) || Guest.create
        start_session(@guest)
        render 'api/users/show'
    end
    
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            start_session(@user)
            render 'api/users/show'
        else
            render json: ['Incorrect Email or Password'], status: 401
        end
    end

    def destroy
        if current_actor
            terminate_session!
            render json: { message: 'Session ended' }
        else
            render json: ['Sorry, but it looks like we didn\'t find an active session.'], status: 404
        end
    end

end
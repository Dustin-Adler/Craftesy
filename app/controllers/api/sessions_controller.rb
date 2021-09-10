class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            log_in(@user)
            render 'api/users/show'
        else
            render json: ['Incorrect Email or Password'], status: 401
        end
    end

    def destroy
        if current_user
            log_out!
            render json: { message: 'Logged out successfully.' }
        else
            render json: ['Sorry, but nobody seems to be logged in.'], status: 404
        end
    end

end
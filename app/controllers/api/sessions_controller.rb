class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render root
        else
            render json: ['Incorrect Email or Password'], status: 401
        end
    end

    def destroy
        if current_user
            logout
            render json: { message: 'Logged out successfully.' }
        else
            render json: ['Sorry, we couldn\'t find a profile that is currently logged in.'], status: 404
        end
    end

end
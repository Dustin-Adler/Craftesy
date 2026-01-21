class Api::SessionsController < ApplicationController

    def new
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        @guest = Guest.find_by(uuid: cookies.signed[:guest_uuid])
        if @user.present?
            start_session(@user)
            render 'api/users/show'
        elsif @guest.present?
            start_session(@guest)
            render 'api/guests/show'
        else
            @guest = ensure_guest
            start_session(@guest)
            render 'api/guests/show'
        end
    end

    def guest_login
        @guest = Guest.find_by(uuid: cookies.signed[:guest_uuid])
        if @guest.present?
            start_session(@guest)
            render 'api/guests/show'
        else
            @guest = ensure_guest
            start_session(@guest)
            render 'api/guests/show'
        end
    end
    
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user.present?
            terminate_session! if ongoing_session?
            start_session(@user)
            render 'api/users/show'
        else
            render json: ['Incorrect Email or Password'], status: 401
        end
    end

    def destroy
        if current_actor.present?
            terminate_session!
            render json: { message: 'Thanks for visiting!' }
        else
            render json: ['Sorry, but it looks like we didn\'t find an active session.'], status: 404
        end
    end    
    
    private

    # There is no strong params for sessions
    # def session_params
    #     params.require(:session).permit( :email, :password, :guest_uuid )
    # end

end
# frozen_string_literal: true

module Api
  # Controller for sessions, including user login/logout and guest session management
  class SessionsController < ApplicationController
    # def new
    #   if @user.present?
    #     start_session(@user)
    #     render 'api/users/show'
    #   elsif @guest.present?
    #     start_session(@guest)
    #     render 'api/guests/show'
    #   else
    #     @guest = ensure_guest
    #     start_session(@guest)
    #     render 'api/guests/show'
    #   end
    # end

    # def guest_login
    #   @guest = ensure_guest
    #   start_session(@guest)
    #   render 'api/guests/show'
    # end

    def create
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user.present?
        current_guest.transfer_items_to_user(@user) if current_actor.is_a?(Guest)
        @cart = @user.cart_items
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
        @guest = ensure_guest
        start_session(@guest)
        render 'api/guests/show'
      else
        render json: ['Sorry, but it looks like we didn\'t find an active session.'], status: 404
      end
    end

    # There are currently no strong params for sessions
    # def session_params
    #     params.require(:session).permit( :email, :password )
    # end
  end
end

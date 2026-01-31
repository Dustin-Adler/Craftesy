# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        current_guest.transfer_items_to_user(@user) if current_actor.is_a?(Guest)
        @cart = @user.cart_items
        terminate_session! if ongoing_session?
        start_session(@user)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def getAccountFromEmail
      @user = User.find_by(email: params[:email])

      @user ||= { id: nil, email: params[:email] }
      render 'api/users/getAccountFromEmail'
    end

    #   def update
    #     @user = current_user
    #     if @user
    #     end
    #   end

    #   def delete
    #     @user = current_user

    #     if @user

    #     end
    #   end

    private

    def user_params
      params.require(:user).permit(:email, :password, :first_name)
    end
  end
end

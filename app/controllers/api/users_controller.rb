class Api::UsersController < ApplicationController

  def index
    @users = User.all
    
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
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
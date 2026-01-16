class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      start_session(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def getAccountFromEmail
    
    @user = User.find_by(email: params[:email])
    
    if @user
      render 'api/users/getAccountFromEmail'
    else 
      @user = {id: nil, email: params[:email]}
      render 'api/users/getAccountFromEmail'
      # render json: "Please enter valid email", status: 422
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
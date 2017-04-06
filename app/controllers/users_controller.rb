class UsersController < ApplicationController

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      #TODO Add UserMailer here
      render json: @user, serializer: UserExpandedSerializer
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end

end

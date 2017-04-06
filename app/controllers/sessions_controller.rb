class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(email: params[:email])&.authenticate(params[:password])
    if @user
      render json: @user, serializer: UserExpandedSerializer
    else
      render json: ["Login failure. Please check credentials and try again."]
    end
  end

  def destroy
  end

end

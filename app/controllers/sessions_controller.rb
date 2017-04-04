class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:session][:username])
    if @user &&                 @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: @user, status: 200
    else
      render json: "Login failure. Please check credentials and try again."
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :root
  end

end

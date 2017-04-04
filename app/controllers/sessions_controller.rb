class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      render json: @user, status: 200
    else
      render json: {message: "Login failure. Please check credentials and try again."}
    end
  end

  def destroy
    render json: {message:"Logout complete."}, status: 200
  end

end

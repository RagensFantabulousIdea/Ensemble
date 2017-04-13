class UsersController < ApplicationController

  before_action :current_user, only: [:update, :destroy]
  before_action :require_user, only: [:update, :destroy]

  def create
    if params[:token]
      find_project
      if @project
        create_user
        save_user
        @user.invited_projects << @project
      end
    else
      create_user
      save_user
    end
  end

  def update
    if @current_user.update(user_params)
      render json: @current_user
    else
      render json: @current_user.errors.full_messages
    end
  end

  def destroy
    @current_user.active = false
    if @current_user.save
      render json: @current_user, serializer: UserDeletedSerializer, status: 401
    else
      render json: @current_user.errors.full_messages, status: 400
    end
    #Resets a user's token so savvy users can't use their old token to login
    @current_user.regenerate_token
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end

  def find_project
    @project = Project.find_by(token: params[:token])
    unless @project
    render json: ["Project not found."], status: 404 and return
    end
  end

  def create_user
    @user = User.new(user_params)
  end

  def save_user
    if @user.save
      #TODO Add UserMailer here
      render json: @user, serializer: UserExpandedSerializer
    else
      render json: @user.errors.full_messages
    end
  end


end

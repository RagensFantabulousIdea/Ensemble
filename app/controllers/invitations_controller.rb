class InvitationsController < ApplicationController

  def create
    @email = params[:email]
    @user = User.find_by(email: @email)
    @token = params[:project_id]
    @project = Project.find_by(token: @token)
    if @user && @project.members.find_by(email: @email) == nil
      @user.invited_projects << @project
      render json: ["#{@user.email} has been added to project successfully!"]
      InvitationsMailer.current_user(@email, @token).deliver
    elsif @user && @project.members.find_by(email: @email)
      render json: ["#{@user.email} already belongs to this project!"]
    else
      InvitationsMailer.new_user(@email, @token, @project).deliver
      render json: ["#{@email} does not exist and user will need to sign-up."]
    end
  end

end

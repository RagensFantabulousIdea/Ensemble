class InvitationsController < ApplicationController

  def create
    @email = params[:email]
    @user = User.find_by(email: @email)
    @first_name = params[:first_name]
    @last_name = params[:last_name]
    @project_token = params[:project_id]
    @project = Project.find_by(project_token: @project_token)

    #If a user exists, but is not a member of the project, add them
    if @user && @project.members.find_by(email: @email) == nil && @user != @project.owner
      @user.invited_projects << @project
      render json: ["#{@user.email} has been added to project successfully!"]
      InvitationsMailer.current_user(@email, @project_token).deliver

    #The user already belongs to this project
    elsif (@user && @project.members.find_by(email: @email)) || (@user == @project.owner)
      render json: ["#{@user.email} already belongs to this project!"]

    #User does not exist and will need to be created
    else
      InvitationsMailer.new_user(@first_name, @last_name, @email, @project_token).deliver
      render json: ["#{@email} does not exist and user will need to sign-up."]
    end
  end

end

class MembershipsController < ApplicationController

  before_action :require_user
  before_action :find_project

  def destroy
    #Handle logic for a user leaving a project
    if editor
     current_user.memberships.find_by(project_id: @project).destroy
     if @project.save
       render json: ["You have been removed from the project successfully"]
     else
       render json: @project.errors.full_messages
     end
    else
      forbidden
    end
  end

  private

  def editor
    @project.owner == @current_user || @project.members.include?(@current_user)
  end

  def find_project
      @project = Project.find(params[:project_id])
  end

  def forbidden
    render json: ["You are not allowed to remove anybody from this project."], status: 401
  end


end

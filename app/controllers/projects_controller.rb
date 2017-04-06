class ProjectsController < ApplicationController

  def index
    @user = current_user
    @projects = @user.total_projects
      if @projects.empty?
        render json: ["No projects to display. Create one?"], status: 200
      else
        render json: @projects
      end
  end

  def create
    @project = current_user.owned_projects.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages, status: 400
    end
  end

  def update
  end

  def destroy
  end

  private

  def project_params
    params.permit(:title, :description, :author, :project_num)
  end

end

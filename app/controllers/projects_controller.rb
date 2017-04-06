class ProjectsController < ApplicationController

  before_action :require_user

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

  def show
    @token = params[:project_id]
    @project = Project.find_by(token: @token)
    if @project
      render json: @project
    else
      render json: ["No project found."]
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

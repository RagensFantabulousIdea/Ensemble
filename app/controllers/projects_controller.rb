class ProjectsController < ApplicationController

  before_action :require_user
  before_action :find_project, only: [:update, :show, :destroy]

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
    if @project.owner == current_user
      if @project.update!(project_params)
        render json: @project
      else
        render json: @project.errors.full_messages, status: 400
      end
    else
      render json: ["You must be the project owner in order to update a project."], status: 401
    end
  end

  def show
    if @project
      render json: @project
      # Left in in case ams.rb gets deleted, and belongs_to :project gets added back. Will limit comments to two levels deep.
      #, include: ['owner','members','left_comments.comments', 'left_comments.comments.comments']
    else
      render json: ["No project found."], status: 404
    end
  end

  def destroy
    @project.destroy if @current_user == @project.owner
    if @project.save
      render json: ["Project deleted successfully."]
    else
      render json: @project.errors.full_messages
    end
  end

  private

  def find_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.permit(:title, :description, :author, :project_num)
  end

end

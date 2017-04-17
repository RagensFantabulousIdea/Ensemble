class ProjectsController < ApplicationController

  before_action :require_user
  before_action :find_project, except: [:index, :create]

  def index
    if params[:complete]
      @projects = projects_complete
    elsif params[:inactive]
      @projects = projects_inactive
    elsif params[:delayed]
      @projects = projects_delayed
    else
      @projects = current_user.total_projects
    end
    if @projects.empty?
      render json: []
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
    #Standard project update logic
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

  def leave_project

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
    render json: ["Project deleted successfully."]
  end

  private

  def editor
    @project.owner == @current_user || @project.members.include?(@current_user)
  end

  def find_project
      @project = Project.find(params[:id])
  end

  def forbidden
    render json: ["You are not authorized to edit this project."], status: 401
  end

  def projects_complete
    current_user.owned_projects.where(complete: params[:complete]) + current_user.invited_projects.where(complete: params[:complete])
  end

  def projects_delayed
    current_user.owned_projects.where(delayed: params[:delayed]) + current_user.invited_projects.where(delayed: params[:delayed])
  end

  def projects_inactive
    current_user.owned_projects.where(inactive: params[:inactive]) + current_user.invited_projects.where(inactive: params[:inactive])
  end

  def project_params
    params.permit(:title, :description, :author, :project_num, :complete, :delayed, :inactive)
  end

end

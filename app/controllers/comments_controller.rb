class CommentsController < ApplicationController

  before_action :require_user
  before_action :find_project
  before_action :find_asset
  before_action :find_comment, only: :destroy

  def create
    @project = current_user.commentable_project(params[:project_id])
    if params[:comment_id]
      @object = @project.comments.find(params[:comment_id])
    elsif params[:asset_id]
      @object = @project.assets.find(params[:asset_id])
    else
      @object = @project
    end
    @comment = Comment.new(
      commentable: @object,
      project: @project,
      user: current_user,
      body: params[:body]
    )
    if @comment.save
      render json: @comment
    else
      render json: ["Comment body required."]
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if current_user.id == @comment.user_id
      @comment.destroy
      render json: ["Comment deleted successfully!"]
    else
      forbidden
    end
  end

  private

  def find_project
    @project = Project.find(params[:project_id])
  end

  def find_asset
    @asset = Asset.find(params[:asset_id])
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end

  def forbidden
    render json: ["You are not authorized to delete this comment."], status: 401
  end


end

class CommentsController < ApplicationController

  before_action :require_user

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

end

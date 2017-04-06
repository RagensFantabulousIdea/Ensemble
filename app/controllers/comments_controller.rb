class CommentsController < ApplicationController

  before_action :require_user

  def create
    if params[:project_id]
      @object = Project.find(params[:project_id])
    elsif params[:comment_id]
      @object = Comment.find(params[:comment_id])
    end
    @comment = @object.comments.new(comment_params)
    @comment.user = current_user
    if @comment.save
      render json: ["Comment added successfully!"]
    else
      render json: ["Comment body required."]
    end
  end

    private

    def comment_params
      params.require(:comment).permit(:body)
    end

end

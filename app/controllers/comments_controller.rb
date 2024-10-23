class CommentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    @commment.user = current_user

    if @comment.save
      flash[:notice] = "Comment has been craeted"
      redirect_to post_path(@post)
    else
      flash[:alert] = "Comment has not been ceated"
      redirect_to post_path(@post)
    end
  end

  def destroy
    @comment = @comment.find(params[:id])
    @comment.destroy
    redirect_to post_path(@post)
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end

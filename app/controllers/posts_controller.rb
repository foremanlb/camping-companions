class PostsController < ApiController
  def index
    @posts = Post.all

    render json: @posts
  end

  def create
    # @campsite = Campsite.find(params[:campsite_id])
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render json: @post.errors
    end

    # if current_user.campsites << @campsite
    #   render json: current_user.campsites
    # else
    #   render json: current_user.errors
    # end
  end

  def destroy
    @campsite = Campsite.find(params[:campsite_id])

    current_user.campsites.delete(@campsite)
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :user_id, :campsite_id)
  end
end

class PostsController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render json: @post.errors
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors
    end
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy
    render json: { message: "#{@post.title} has been deleted." }
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :user_id, :campsite_id)
  end
end

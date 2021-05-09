class CampsitesController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
    @campsites = Campsite.all
    render json: @campsites
  end

  def show
    @campsite = Campsite.find(params[:id])
    render json: @campsite
  end

  def create
    @campsite = Campsite.new(campsite_params)

    if @campsite.save
      render json: @artist
    else
      render json: @artis.errors
    end
  end

  def update
    @campsite = Campsite.find(params[:id])

    if @campsite.update(campsite_params)
      render json: @campsite
    else
      render json: @campsite.errors
    end
  end

  def destroy
    @campsite = Campsite.find(params[:id])

    @campsite.destroy
    render json: { message: "#{@campsite.name} has been deleted." }
  end
end

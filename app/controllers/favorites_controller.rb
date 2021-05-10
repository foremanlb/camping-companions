class FavoritesController < ApiController
  def index
    @favorites = current_user.campsites

    render json: @favorites
  end

  def create
    @campsite = Campsite.find(params[:campsite_id])

    if current_user.campsites << @campsite
      render json: current_user.campsites
    else
      render json: current_user.errors
    end
  end

  def destroy
    @campsite = Campsite.find(params[:campsite_id])

    current_user.campsites.delete(@campsite)
  end
end

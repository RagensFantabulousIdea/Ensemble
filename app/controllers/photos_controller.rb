class PhotosController < ApplicationController
  def index
<<<<<<< Updated upstream
=======
    if editor
      @photos = @asset.photos
      render json: @photos
    else
      forbidden
    end
>>>>>>> Stashed changes
  end

  def create
  end

  def update
  end

  def destroy
  end
end

class SamplePhotosController < ApplicationController
  before_action :require_user
  before_action :find_project
  before_action :find_asset
  before_action :find_photo, except: [:index, :create, :selected]
  before_action :editor

  def index
    if editor
      @photos = @asset.sample_photos
      render json: @photos
    else
      forbidden
    end
  end

  def create
    if editor
      @photo = @asset.sample_photos.new(sample_photo_params)
      if @photo.save
        render json: @photo.reload
      else
        render json: @photo.errors.full_messages
      end
    else
      forbidden
    end
  end

  def destroy
    if editor
      @photo.destroy
      render json: ["Photo deleted successfully."]
    else
      forbidden
    end
  end

  def show
    if editor
      if @photo
        render json: @photo
      else
        render json: @photo.errors.full_messages
      end
    else
      forbidden
    end
  end

  def update
    if editor
      if @photo.update!(sample_photo_params)
        render json: @photo
      else
        render json: @photo.errors.full_messages, status: 400
      end
    else
      forbidden
    end
  end

  private

  def editor
    @project.owner == @current_user || @project.members.include?(@current_user)
  end

  def find_asset
    @asset = Asset.find(params[:asset_id])
  end

  def find_photo
    @photo = SamplePhoto.find(params[:id])
  end

  def find_project
    @project = Project.find(params[:project_id])
  end

  def forbidden
    render json: ["You are not authorized to view/edit this photo."], status: 401
  end

  def sample_photo_params
    params.permit(:id, :image, :asset_id)
  end

end

class PhotosController < ApplicationController
  before_action :require_user
  before_action :find_project
  before_action :find_asset
  before_action :find_photo, except: [:index, :create, :selected]
  # before_action :find_selected_photo, only: [:index]
  before_action :editor

  def index
    if editor
      @photos = @asset.photos
      render json: @photos
    else
      forbidden
    end
  end

  def samples
    @photos = @asset.photos.sample_photo.all
    if editor
      if @photos
        render json: @photos
      else
        render json: @photos.errors.full_messages, status: 400
      end
    else
      forbidden
    end
  end

  def create
    if editor
      @photo = @asset.photos.new(photo_params)
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

  def selected
    @photo = Photo.find_by(frame_num: params[:id])
    if editor
      if @photo
        @photo.selected = params[:selected]
        if @photo.save
          render json: ["Photo #{@photo.frame_num} set as the selected photo for Project #{@project.project_num}, figure #{@asset.figure_num} successfully!"]
        else
          render json: @photo.errors.full_messages, status: 400
        end
      else
        render json: ["Frame number not found."], status: 404
      end
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
      if @photo.update!(photo_params)
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
    @photo = Photo.find(params[:id])
  end

  #TODO Does this need to go into the Assets Controller?
  # def find_selected_photo
  #   @selected_photo = @asset.selected_photo if @asset.selected_photo
  # end

  def find_project
    @project = Project.find(params[:project_id])
  end

  def forbidden
    render json: ["You are not authorized to view/edit this photo."], status: 401
  end

  def photo_params
    params.permit(:image, :frame_num, :liked, :disliked, :selected, :asset_id, :selected_photo, {sample_photos: []})
  end

end

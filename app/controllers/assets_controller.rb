class AssetsController < ApplicationController

  before_action :find_project
  before_action :find_asset, except: [:index, :create]
  before_action :require_user
  before_action :editor, except: [:index]

  def index
    @assets = @project.assets.all
    render json: @assets
  end

  def show
    if editor
      if @asset
        render json: @asset
      else
        render json: @asset.errors.full_messages
      end
    else
      forbidden
    end
  end

  def create
    if editor
      @asset = @project.assets.new(asset_params)
      if @asset.save
        render json: @asset
      else
        render json: @asset.errors.full_messages
      end
    else
      forbidden
    end
  end

  def update
    if editor
      original_names = []
      original_names = params[:sample_photos].collect do |name|
        name.original_filename
      end
        if @asset.update!(asset_params)
          asset_params.merge({sample_photos: original_names})
          params[:sample_photos].each do |upload|
            Cloudinary::Uploader.upload(upload)
          end
          render json: @asset
        else
          render json: @asset.errors.full_messages
        end
    else
      forbidden
    end
  end

  def destroy
    if editor
      @asset.destroy
      render json: ["Asset deleted successfully."]
    else
      render json: ["You are not authorized to delete this resource."], status: 401
    end
  end

  private

  def asset_params
    params.permit(:figure_num, :asset_description, :order_num, :landscape, :portrait, :demonstrative, :decorative, :frame_num, :instructions, :photographer, :frame_range, :parts, :equipment, :model, :location_of_shoot, :date_of_shoot, :time_of_shoot, :id ) # {sample_photos: []},
  end

  def forbidden
    render json: ["You are not authorized to create/edit an asset for this project."], status: 401
  end

  def editor
    @project.owner == @current_user || @project.members.include?(@current_user)
  end

  def find_project
      @project = Project.find(params[:project_id])
  end

  def find_asset
    @asset = @project.assets.find(params[:id])
  end

end

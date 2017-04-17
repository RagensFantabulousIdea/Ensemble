class RenameModelToPhotoModelInAssets < ActiveRecord::Migration[5.0]
  def change
    rename_column :assets, :model, :photo_model 
  end
end

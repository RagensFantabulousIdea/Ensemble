class RemoveSamplePhotosFromAssets < ActiveRecord::Migration[5.0]
  def change
    remove_column :assets, :sample_photos
  end
end

class AddSamplePhotosToAssets < ActiveRecord::Migration[5.0]
  def change
    add_column :assets, :sample_photos, :json
  end
end

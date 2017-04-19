class AddColumnSamplePhotoToPhoto < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :sample_photo, :boolean, default: false
  end
end

class AddAssetIdToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_reference :photos, :asset, foreign_key: true
  end
end

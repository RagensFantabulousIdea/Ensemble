class ChangeDescriptionToAssetDescription < ActiveRecord::Migration[5.0]
  def change
    rename_column :assets, :description, :asset_description
  end
end

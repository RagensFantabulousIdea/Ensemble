class ChangeDescriptionToAssetDescription < ActiveRecord::Migration[5.0]
  def change
    rename_column :projects, :project_id, :project_num
  end
end

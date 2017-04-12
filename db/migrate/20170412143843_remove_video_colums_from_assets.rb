class RemoveVideoColumsFromAssets < ActiveRecord::Migration[5.0]
  def change
    remove_column :assets, :video_only, :boolean
    remove_column :assets, :video_needed, :boolean
  end
end

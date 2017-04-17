class RemoveSomeColumnsFromAssets < ActiveRecord::Migration[5.0]
  def change
    remove_column :assets, :video_only
    remove_column :assets, :video_needed
    remove_column :assets, :tag
  end
end

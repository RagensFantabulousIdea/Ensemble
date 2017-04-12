class RemoveTagFromAssets < ActiveRecord::Migration[5.0]
  def change
    remove_column :assets, :tag, :string
  end
end

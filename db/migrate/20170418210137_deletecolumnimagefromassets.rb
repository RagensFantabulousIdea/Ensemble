class Deletecolumnimagefromassets < ActiveRecord::Migration[5.0]
  def change
    remove_column :assets, :image
  end
end

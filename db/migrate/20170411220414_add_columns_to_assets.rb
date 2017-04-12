class AddColumnsToAssets < ActiveRecord::Migration[5.0]
  def change
    add_column :assets, :frame_range, :string
    add_column :assets, :parts, :integer
    add_column :assets, :equipment, :text
    add_column :assets, :model, :text
    add_column :assets, :location_of_shoot, :text
    add_column :assets, :date_of_shoot, :string
    add_column :assets, :time_of_shoot, :string
    add_column :assets, :image, :string
  end
end

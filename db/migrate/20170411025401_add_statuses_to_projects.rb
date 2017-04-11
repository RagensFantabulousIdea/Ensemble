class AddStatusesToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :complete, :boolean, default: false
    add_column :projects, :delayed,  :boolean, default: false
    add_column :projects, :inactive, :boolean, default: false
  end
end

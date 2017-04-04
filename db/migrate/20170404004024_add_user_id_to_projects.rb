class AddUserIdToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :user_id, :integer
    add_foreign_key :projects, :users
  end
end

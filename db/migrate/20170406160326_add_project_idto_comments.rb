class AddProjectIdtoComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :project_id, :integer, foreign_key: true
  end
end

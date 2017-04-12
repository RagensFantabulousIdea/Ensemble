class AddProjectIdToAssets < ActiveRecord::Migration[5.0]
  def change
    add_reference :assets, :project, foreign_key: true
  end
end

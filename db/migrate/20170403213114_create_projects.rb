class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :project_id
      t.string :title
      t.string :description
      t.string :author
      t.string :token

      t.timestamps
    end
  end
end

class ChangeTokenToProjectToken < ActiveRecord::Migration[5.0]
  def change
    rename_column :projects, :token, :project_token
  end
end

class CreateShootAndAssets < ActiveRecord::Migration[5.0]
  def change
    create_table :shoot_and_assets do |t|
      t.references :shoot, foreign_key: true
      t.references :asset, foreign_key: true

      t.timestamps
    end
  end
end

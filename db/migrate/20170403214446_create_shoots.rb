class CreateShoots < ActiveRecord::Migration[5.0]
  def change
    create_table :shoots do |t|
      t.string :location
      t.string :props
      t.time :time

      t.timestamps
    end
  end
end

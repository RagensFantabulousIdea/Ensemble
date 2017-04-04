class CreateAssets < ActiveRecord::Migration[5.0]
  def change
    create_table :assets do |t|
      t.string :figure_num
      t.string :description
      t.integer :order_num
      t.boolean :landscape
      t.boolean :portrait
      t.boolean :demonstrative
      t.boolean :decorative
      t.boolean :video_needed
      t.boolean :video_only
      t.string :frame_num
      t.string :tag
      t.string :instructions
      t.string :photographer

      t.timestamps
    end
  end
end

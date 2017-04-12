class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :image
      t.string :frame_num
      t.boolean :liked, default: false
      t.boolean :disliked, default: false
      t.boolean :selected, default: false

      t.timestamps
    end
  end
end

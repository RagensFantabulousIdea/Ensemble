class CreateSamplePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :sample_photos do |t|
      t.string :image
      t.references :asset, foreign_key: true

      t.timestamps
    end
  end
end

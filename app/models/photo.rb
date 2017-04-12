class Photo < ApplicationRecord
  belongs_to :asset

  mount_uploader :image, ImageUploader

end

class Photo < ApplicationRecord

  default_scope { order(created_at: :asc) }

  belongs_to :asset

  mount_uploader :image, ImageUploader

end

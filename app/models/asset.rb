class Asset < ApplicationRecord

  mount_uploader :image, ImageUploader

  belongs_to :project

  has_many :photos
  has_one :selected_photo, class_name: Photo

  has_many :comments, as: :commentable, dependent: :destroy

end

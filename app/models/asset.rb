class Asset < ApplicationRecord

  mount_uploader :sample_photos, ImageUploader

  belongs_to :project

  has_many :photos
  has_one :selected_photo, -> {where(selected: true)}, class_name: 'Photo'

  has_many :comments, as: :commentable, dependent: :destroy

end

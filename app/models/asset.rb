class Asset < ApplicationRecord
  validates_presence_of :figure_num, :description, :instructions, required: true

  mount_uploader :image, ImageUploader

  has_many :photos
  has_one :selected_photo, class_name: Photo

  has_many :comments, dependent: :destroy
  has_many :left_comments, as: :commentable, class_name: 'Comment', dependent: :destroy

end

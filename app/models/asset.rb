class Asset < ApplicationRecord
  belongs_to :project

  has_many :photos, dependent: :delete_all
  has_many :sample_photos, dependent: :delete_all
  has_one :selected_photo, -> {where(selected: true)}, class_name: 'Photo'

  has_many :comments, as: :commentable, dependent: :destroy

end

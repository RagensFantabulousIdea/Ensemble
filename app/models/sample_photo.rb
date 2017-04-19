class SamplePhoto < ApplicationRecord
  belongs_to :asset

  mount_uploader :image, SamplePhotoUploader
end

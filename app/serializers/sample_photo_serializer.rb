class SamplePhotoSerializer < ActiveModel::Serializer

  attributes :id, :image, :asset_id

  has_one :image
end

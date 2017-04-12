class PhotoSerializer < ActiveModel::Serializer

  belongs_to :asset, :project
  attributes :id, :image, :frame_num, :liked, :disliked, :selected
end

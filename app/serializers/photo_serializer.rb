class PhotoSerializer < ActiveModel::Serializer

  attributes :id, :frame_num, :liked, :disliked, :selected

  has_one :image
end

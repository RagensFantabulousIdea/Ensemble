class PhotoSerializer < ActiveModel::Serializer

  attributes :id, :frame_num, :liked, :disliked, :selected, :sample_photo

  has_one :image
end

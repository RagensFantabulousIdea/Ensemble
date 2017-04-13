class AssetSerializer < ActiveModel::Serializer

  has_many :photos
  has_one :selected_photo

  attributes :id, :figure_num, :description, :order_num, :landscape, :portrait, :demonstrative, :decorative, :frame_num, :instructions, :photographer

end

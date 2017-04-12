class AssetSerializer < ActiveModel::Serializer

  has_many :photos
  has_one :selected_photo

  attributes :id, :figure_num, :description, :order_num, :landscape, :portrait, 
  :demonstrative, :decorative, :video_needed, :video_only, :frame_num,
  :tag, :instructions, :photographer

end

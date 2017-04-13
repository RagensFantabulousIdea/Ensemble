class AssetSerializer < ActiveModel::Serializer

  belongs_to :project

  has_many :photos
  has_one :selected_photo

  attributes :id, :figure_num, :asset_description, :order_num, :landscape, :portrait, :demonstrative, :decorative, :frame_num, :instructions, :photographer

end

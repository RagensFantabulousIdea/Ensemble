class AssetSerializer < ActiveModel::Serializer
  attributes :id, :figure_num, :description, :order_num, :landscape, :portrait, :demonstrative, :decorative, :video_needed, :video_only, :frame_num, :tag, :instructions, :photographer
end

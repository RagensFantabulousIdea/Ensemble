class AssetSerializer < ActiveModel::Serializer

  has_many :photos
  has_one :selected_photo

  has_many :comments

  attributes :id, :figure_num, :asset_description, :order_num, :landscape, :portrait, :demonstrative, :decorative, :frame_num, :instructions, :photographer, :frame_range, :parts, :equipment, :photo_model, :location_of_shoot, :date_of_shoot, :time_of_shoot, :sample_photos

end

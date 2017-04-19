class Asset < ApplicationRecord
  belongs_to :project

  has_many :photos, dependent: :delete_all
  has_many :sample_photos, dependent: :delete_all
  has_one :selected_photo, -> {where(selected: true)}, class_name: 'Photo'

  default_scope { order(created_at: :asc) }

  has_many :comments, as: :commentable, dependent: :destroy

  def next
    project.assets.where("created_at > ?", created_at).first
  end

  def previous
    project.assets.where("created_at < ?", created_at).last
  end

end

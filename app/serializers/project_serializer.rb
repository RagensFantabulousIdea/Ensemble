class ProjectSerializer < ActiveModel::Serializer

  belongs_to :owner
  has_many :members
  has_many :left_comments
  has_many :assets

  attributes :id, :project_token, :title, :description, :author, :project_num, :complete,
  :delayed, :inactive
end

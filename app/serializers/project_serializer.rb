class ProjectSerializer < ActiveModel::Serializer

  belongs_to :owner
  has_many :members
  has_many :left_comments
  has_many :assets

<<<<<<< Updated upstream
  attributes :id, :token, :title, :description, :author, :project_num, :complete,
  :delayed, :inactive, :memberships
=======
  attributes :id, :project_token, :title, :description, :author, :project_num, :complete,
  :delayed, :inactive
>>>>>>> Stashed changes

end

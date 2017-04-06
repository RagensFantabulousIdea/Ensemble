class ProjectSerializer < ActiveModel::Serializer

  belongs_to :owner
  has_many :members

  attributes :id, :token, :description, :title, :author, :project_num

  # def user
  #   object.user.email
  # end

end

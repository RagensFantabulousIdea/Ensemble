class ProjectSerializer < ActiveModel::Serializer

  belongs_to :user

  attributes :id, :token, :description, :title, :author, :project_num

  # def user
  #   object.user.email
  # end

end

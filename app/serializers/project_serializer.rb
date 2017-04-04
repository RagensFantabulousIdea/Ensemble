class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :token, :description, :title, :author, :project_num
end

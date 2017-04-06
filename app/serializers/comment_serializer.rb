class CommentSerializer < ActiveModel::Serializer

  belongs_to :project, :user

  attributes :id, :body
end

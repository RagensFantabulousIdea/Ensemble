class CommentSerializer < ActiveModel::Serializer

  # Future self: Do NOT uncomment the line below, unless you first go and delete the AMS.rb in Initializers
  # It will cause an infinite loop.
  # belongs_to :project
  belongs_to :user
  has_many :comments

  attributes :id, :body
end

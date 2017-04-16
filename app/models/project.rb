class Project < ApplicationRecord
  has_secure_token :project_token

  belongs_to :owner, class_name: "User", foreign_key: :user_id

  has_many :memberships, dependent: :delete_all
  has_many :members, through: :memberships, source: :user, dependent: :delete_all

  has_many :assets

  has_many :photos

  has_many :comments, dependent: :destroy
  has_many :left_comments, as: :commentable, class_name: 'Comment', dependent: :destroy

  validates_presence_of :title, :description, :author, required: true

  def team
    owner + members
  end

end

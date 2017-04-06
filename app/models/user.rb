class User < ApplicationRecord

has_secure_password
has_secure_token

has_many :owned_projects, class_name: "Project", foreign_key: :user_id

has_many :memberships
has_many :invited_projects, through: :memberships, source: :project

validates_presence_of :email, :first_name, :last_name, required: true
validates :email, uniqueness: true

def total_projects
  owned_projects + invited_projects
end

end

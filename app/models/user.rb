class User < ApplicationRecord

has_secure_password
has_secure_token

has_many :comments

has_many :owned_projects, class_name: "Project", foreign_key: :user_id

has_many :memberships
has_many :invited_projects, through: :memberships, source: :project

validates_presence_of :email, :first_name, :last_name, required: true
validates :email, uniqueness: true

def total_projects
  owned_projects + invited_projects
end

def commentable_project(project_id)
 @project = Project.find_by(id: project_id)
 if @project.owner == self
   @object = owned_projects.find_by(id: project_id)
 elsif @project.members.include?(self)
   @object = invited_projects.find_by(id: project_id)
 end
 @object
end

end

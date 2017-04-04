class Project < ApplicationRecord
  has_secure_token

  belongs_to :user

  validates_presence_of :title, :description, :author, required: true
end

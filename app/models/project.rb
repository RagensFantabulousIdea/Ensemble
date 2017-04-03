class Project < ApplicationRecord
  has_secure_token

  validates_presence_of :title, :author, required: true
end

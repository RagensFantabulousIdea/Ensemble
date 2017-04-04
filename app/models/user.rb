class User < ApplicationRecord

has_secure_password
has_secure_token

has_many :projects

validates_presence_of :email, :first_name, :last_name, required: true
validates :email, uniqueness: true

end

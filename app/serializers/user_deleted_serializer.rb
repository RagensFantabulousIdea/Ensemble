class UserDeletedSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :message

  def message
    "User successfully disabled."
  end
end

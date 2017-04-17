class UserMailer < ApplicationMailer

  def create(first_name, email)
    @first_name = first_name
    @email = email
    mail(to: @email, subject: "Welcome to LensFlare, #{@first_name}!")
  end

end

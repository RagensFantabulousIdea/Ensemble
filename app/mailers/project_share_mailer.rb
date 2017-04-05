class ProjectShareMailer < ApplicationMailer

  def share(email)
    @email = email
    mail(to: @email, subject: "You've been invited to a project!")
  end

end

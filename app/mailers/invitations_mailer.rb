class InvitationsMailer < ApplicationMailer

  def current_user(email,token)
    @email = email
    @user = User.find_by(email: @email)
    @token = token
    @project = Project.find_by(token: @token)
    mail(to: @email, subject: "You've been invited to a project!")
  end

  def new_user(email, token, project)
    @email = email
    @token = token
    @project = project
    mail(to: @email, subject: "You've been invited to a project!")
  end

end

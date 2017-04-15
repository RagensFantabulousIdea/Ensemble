class InvitationsMailer < ApplicationMailer

  def current_user(email,project_token)
    @email = email
    @user = User.find_by(email: @email)
    @token = project_token
    @project = Project.find_by(project_token: @token)
    mail(to: @email, subject: "You've been invited to a project!")
  end

  def new_user(first_name, last_name, email, project_token)
    @first_name = first_name
    @last_name = last_name
    @email = email
    @project_token = project_token
    @project = Project.find_by(project_token: @project_token)
    mail(to: @email, subject: "You've been invited to a LensFlare project, #{@first_name}!")
  end

end

class InvitationsMailer < ApplicationMailer

  def current_user(email,project_token)
    @email = email
    @user = User.find_by(email: @email)
    @project_token = project_token
    @project = Project.find_by(project_token: @project_token)
    mail(to: @email, subject: "You've been invited to a project!")
  end

  def new_user(first_name, last_name, email, project_token)
    @first_name = first_name
    @last_name = last_name
    @email = email
    @project_token = project_token
    @project = Project.find_by(project_token: @project_token)
    mail(to: @email, subject: "You've been invited to Project #{@project.project_num} on LensFlare, #{@first_name}!")
  end

end

class ApplicationMailer < ActionMailer::Base
  #TODO Change Sendgrid mailer address
  default from: 'staff@ensemble.herokuapp.com'
  layout 'mailer'
end

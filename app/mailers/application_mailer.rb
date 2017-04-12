class ApplicationMailer < ActionMailer::Base
  #TODO Change Sendgrid mailer address
  default from: 'staff@lensflare.herokuapp.com'
  layout 'mailer'
end

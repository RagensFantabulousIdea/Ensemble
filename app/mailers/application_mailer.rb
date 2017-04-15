class ApplicationMailer < ActionMailer::Base
  default from: 'staff@lensflare.herokuapp.com'
  layout 'mailer'
end

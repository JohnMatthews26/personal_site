class MainMailer < ApplicationMailer
  default from: 'johnmatthews2634@gmail.com'

  def send_message(message)
    @body = message.body
    @email = message.email
    @name = message.name
    mail(to: "johnmatthews2634@gmail.com", subject: 'Personal Site Mail')
  end
end

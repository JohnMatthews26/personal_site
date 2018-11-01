class MessengerController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save
      MainMailer.send_message(@message)
    end
  end


  private

  def message_params
    params.require(:message).permit(:body, :name, :email)
  end
end

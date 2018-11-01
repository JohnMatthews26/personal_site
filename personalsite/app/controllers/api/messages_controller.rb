class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      MainMailer.send_message(@message).deliver_now
    end
  end


  private

  def message_params
    params.require(:message).permit(:body, :name, :email)
  end
end

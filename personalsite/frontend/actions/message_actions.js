export const CREATE_MESSAGE = "CREATE_MESSAGE";
import * as APIUtil from "../util/message_util";

export const createMessage = message => dispatch => (
  APIUtil.createMessage(message)
);

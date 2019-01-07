import { NOTIFY_USER } from "./types";

export const notifyUser = (message, messageType) => {
  return {
    type: NOTIFY_USER,
    message,
    messageType
  };
};

//or
{
  /* 
export const notify_user = (message, messageType) => {
    type: NOTIFY_USER,
    message,
    messageType
  };
*/
}

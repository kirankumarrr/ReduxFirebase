import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "./../actions/types";

const initialState = {
  //Since i set local storage in store I Dont require this anymore
  // disableBalanceOnAdd: true,
  // disableBalanceOnEdit: false,
  // allowRegistration: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        //Here we pass as a payload
        // disableBalanceOnAdd: !state.disableBalanceOnAdd
        disableBalanceOnAdd: action.payload
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        // disableBalanceOnEdit: !state.disableBalanceOnEdit
        disableBalanceOnEdit: action.payload
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        //allowRegistration: !state.allowRegistration
        allowRegistration: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

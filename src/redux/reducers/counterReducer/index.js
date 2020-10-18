import { DECREMENT, INCREMENT, RESET } from "../../actionsTypes/counterActionsTypes";

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        value: state.value-1,
      };
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
      case RESET:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

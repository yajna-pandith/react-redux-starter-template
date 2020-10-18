import { DECREMENT, INCREMENT, RESET} from "../../actionsTypes/counterActionsTypes";

export const increaseValue = () => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT,
    });
  };
};

export const decreaseValue = () => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT,
    });
  };
};

export const resetValue = () => {
  return (dispatch) => {
    dispatch({
      type: RESET,
    });
  };
};


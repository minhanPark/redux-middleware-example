import { INCREMENT, DECREMENT } from "../actions/number/actions";

const initialState = {
  number: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1
      };
    case DECREMENT:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

export default reducer;

import {
  POST_PENDING,
  GET_SUCCESS,
  GET_FAILURE
} from "../actions/post/actions";

const initialState = {
  pending: false,
  error: false,
  data: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_PENDING:
      return {
        ...state,
        pending: true,
        error: false
      };
    case GET_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data
      };
    case GET_FAILURE:
      return {
        ...state,
        pending: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;

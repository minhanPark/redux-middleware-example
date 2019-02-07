import { POST_PENDING, GET_SUCCESS, GET_FAILURE } from "./actions";
import axios from "axios";

export const getPost = postId => dispatch => {
  dispatch({ type: POST_PENDING });
  return axios
    .get(`https://jsonplaceholder.typicode.com/comments/${postId}`)
    .then(res => dispatch({ type: GET_SUCCESS, data: res.data.body }))
    .catch(err => dispatch({ type: GET_FAILURE, err }));
};

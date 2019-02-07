import React from "react";

const ButtonSet = ({ numberActions, postActions, number }) => (
  <div>
    <button onClick={numberActions.increment}>증가</button>
    <button onClick={numberActions.decrement}>감소</button>
    <button onClick={() => postActions.getPost(number)}>포스트</button>
  </div>
);

export default ButtonSet;

import App from "./AppComponent";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { postReducers } = state;
  return {
    pending: postReducers.pending,
    error: postReducers.error,
    data: postReducers.data
  };
};

export default connect(mapStateToProps)(App);

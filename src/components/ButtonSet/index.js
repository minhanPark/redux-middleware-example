import ButtonSet from "./ButtonSet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as numberActions from "../../actions/number";
import * as postActions from "../../actions/post";

const mapStateToProps = state => {
  const { numberReducers } = state;
  return {
    number: numberReducers.number
  };
};

const mapDispatchToProps = dispatch => ({
  numberActions: bindActionCreators(numberActions, dispatch),
  postActions: bindActionCreators(postActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonSet);

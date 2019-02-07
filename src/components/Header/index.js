import Header from "./Header";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { numberReducers } = state;
  return {
    number: numberReducers.number
  };
};

export default connect(mapStateToProps)(Header);

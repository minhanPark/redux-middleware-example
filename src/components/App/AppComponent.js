import React, { Component } from "react";
import Header from "../Header";
import ButtonSet from "../ButtonSet";

class AppComponent extends Component {
  render() {
    const { pending, error, data } = this.props;
    return (
      <div className="App">
        <Header />
        <ButtonSet />
        {pending && <h2>로딩중....</h2>}
        {error ? <h1>에러 발생</h1> : <h2>{data}</h2>}
      </div>
    );
  }
}

export default AppComponent;

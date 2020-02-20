import React, { Component } from "react";

class App extends Component {
  state = {
    lang: "en",
    email: "",
    nick: "",
    password: "",
    country: ""
  };
  render() {
    return (
      <div className="app">
        <form action="submit">
          <input type="text" className="email" />
          <input type="text" className="nick" />
          <input type="text" className="country" />
          <input type="password" className="password" />
        </form>
      </div>
    );
  }
}

export default App;

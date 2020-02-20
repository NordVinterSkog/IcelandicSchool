import React, { Component } from "react";
import Message from "./Message";
import "./App.css";

class App extends Component {
  state = {
    lang: "en",
    email: "",
    nick: "",
    password: "",
    country: "",
    fields: {
      email: "E-mail address",
      password: "Password",
      country: "Country"
    },
    validation: {
      email: true,
      nick: true,
      country: true,
      password: true,
      all: false
    },
    errors: {
      email: "E-mail address must contain @.",
      nick: "Nickname must be at least 6 characters long.",
      password:
        "Password must be at least 6 characters long and contain no spaces.",
      country: "Pick a country!"
    }
  };

  changeLanguage = e => {
    console.log(e.target.id);
    let lang = e.target.id;
    let fields = [
      {
        id: "pl",
        email: "Adres e-mail",
        password: "Hasło",
        country: "Kraj"
      },
      {
        id: "en",
        email: "E-mail Adress",
        password: "Password",
        country: "Country"
      },
      {
        id: "no",
        email: "Epostadresse",
        password: "Passord",
        country: "Land"
      },
      {
        id: "sw",
        email: "E-postadress",
        password: "Lösenord",
        country: "Land"
      },
      {
        id: "de",
        email: "E-Mail-Addresse",
        password: "Passwort",
        country: "Land"
      }
    ];
    fields = fields.filter(field => field.id === lang);
    let errors = [
      {
        id: "en",
        email: "E-mail must contain @.",
        password:
          "Password must be at least 6 characters long and contain no spaces.",
        country: "",
        nick: "Nickname must be at least 6 characters long."
      },
      {
        id: "pl",
        email: "Adres e-mail musi zawierać @.",
        password:
          "Hasło musi mieć przynajmniej 6 znaków i nie zawierać spacji.",
        country: "",
        nick: "Pseudonim musi mieć przynajmniej 6 znaków."
      },
      {
        id: "sw",
        email: "E-postadress måste innehålla @.",
        password: "Lösenord ska inte innehålla mellanslag.",
        country: "Välj landet.",
        nick: "Användarnamn ska vara minst 5 tecken långt."
      }
    ];
    errors = errors.filter(error => error.id === lang);
    console.log(fields);
    this.setState({
      lang,
      fields: {
        email: fields[0].email,
        password: fields[0].password,
        country: fields[0].country
      },
      errors: {
        email: errors[0].email,
        password: errors[0].password,
        nick: errors[0].nick,
        country: errors[0].country
      }
    });
  };

  handleInput = e => {
    console.log(e.target);
    let value = e.target.value;
    let id = e.target.id;
    this.setState({
      [id]: value
    });
  };

  validate = e => {
    e.preventDefault();
    let email = false;
    let nick = false;
    let password = false;
    let country = false;
    let all = false;
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.nick.length > 5) {
      nick = true;
    }
    if (
      this.state.password.indexOf(" ") === -1 &&
      this.state.password.length > 5
    ) {
      password = true;
    }
    if (this.state.country !== "") {
      country = true;
    }
    if (email && nick && password && country) {
      all = true;
    }

    this.setState({
      validation: {
        email,
        nick,
        password,
        country,
        all
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="overlay">
          {this.state.validation.all ? (
            <div className="ok">DOBRZE!</div>
          ) : (
            <div className="main">
              <h1>Góðan daginn!</h1>
              <Message lang={this.state.lang} />
              <form action="submit">
                <p className="fieldName">{this.state.fields.email}:</p>
                <input
                  type="text"
                  className="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
                <p>
                  {this.state.validation.email === true
                    ? null
                    : this.state.errors.email}
                </p>
                <p className="fieldName">Nick:</p>
                <input
                  type="text"
                  className="nick"
                  id="nick"
                  value={this.state.nick}
                  onChange={this.handleInput}
                />
                <p>
                  {this.state.validation.nick === true
                    ? null
                    : this.state.errors.nick}
                </p>
                <p className="fieldName">{this.state.fields.country}:</p>{" "}
                <input
                  type="text"
                  className="country"
                  id="country"
                  value={this.state.country}
                  onChange={this.handleInput}
                />
                <p>
                  {this.state.validation.country === true
                    ? null
                    : this.state.errors.country}
                </p>
                <p className="fieldName">{this.state.fields.password}:</p>
                <input
                  type="password"
                  className="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
                <p>
                  {this.state.validation.password === true
                    ? null
                    : this.state.errors.password}
                </p>
                <button className="submit" onClick={this.validate}>
                  Start!
                </button>
              </form>
              <div className="langs">
                <button id="pl" onClick={this.changeLanguage}>
                  PL
                </button>
                <button id="no" onClick={this.changeLanguage}>
                  NO
                </button>
                <button id="en" onClick={this.changeLanguage}>
                  EN
                </button>
                <button id="sw" onClick={this.changeLanguage}>
                  SW
                </button>
                <button id="de" onClick={this.changeLanguage}>
                  DE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

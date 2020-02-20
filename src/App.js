import React, { Component } from "react";
import Message from "./Message";
import "./App.css";

class App extends Component {
  state = {
    lang: "en",
    image: "",
    email: "",
    nick: "",
    password: "",
    fields: {
      email: "E-mail address",
      password: "Password"
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
        "Password must be at least 6 characters long and contain no spaces."
    }
  };

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?key=14976958-ee38bbe3e71cf647de563cf70&q=reykjavik&image_type=photo&pretty=true"
    )
      .then(results => {
        return results.json();
      })
      .then(results => {
        let image = results.hits[Math.floor(Math.random() * 20)].largeImageURL;
        this.setState({ image });
      });
  }

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
        nick: "Nickname must be at least 5 characters long."
      },
      {
        id: "pl",
        email: "Adres e-mail musi zawierać @.",
        password:
          "Hasło musi mieć przynajmniej 6 znaków i nie zawierać spacji.",
        nick: "Pseudonim musi mieć przynajmniej 5 znaków."
      },
      {
        id: "sw",
        email: "E-postadress måste innehålla @.",
        password:
          "Lösenord  kan inte innehålla mellanslag och måste vara minst 6 tecken långt.",
        nick: "Användarnamn ska vara minst 5 tecken långt."
      },
      {
        id: "no",
        email: "Epostadress må inneholde @.",
        password: "Løsningsord kan ikke inneholde mellomanslag.",
        nick: "Brukernavn må være minst 5 tegn langt."
      }
    ];
    errors = errors.filter(error => error.id === lang);
    console.log(fields);
    this.setState({
      lang,
      fields: {
        email: fields[0].email,
        password: fields[0].password
      },
      errors: {
        email: errors[0].email,
        password: errors[0].password,
        nick: errors[0].nick
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

    if (email && nick && password) {
      all = true;
    }

    this.setState({
      validation: {
        email,
        nick,
        password,
        all
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div
        className="app"
        style={{ backgroundImage: `url(${this.state.image})` }}
      >
        <div className="overlay">
          {this.state.validation.all ? (
            <div className="ok">DOBRZE!</div>
          ) : (
            <div className="main">
              <div className="langs">
                <button id="pl" onClick={this.changeLanguage}>
                  <img
                    id="pl"
                    src="https://restcountries.eu/data/pol.svg"
                    alt=""
                  />
                </button>
                <button id="en" onClick={this.changeLanguage}>
                  <img
                    id="en"
                    src="https://restcountries.eu/data/gbr.svg"
                    alt=""
                  />
                </button>
                <button id="no" onClick={this.changeLanguage}>
                  <img
                    id="no"
                    src="https://restcountries.eu/data/nor.svg"
                    alt=""
                  />
                </button>

                <button id="sw" onClick={this.changeLanguage}>
                  <img
                    id="sw"
                    src="https://restcountries.eu/data/swe.svg"
                    alt=""
                  />
                </button>
                <button id="de" onClick={this.changeLanguage}>
                  <img
                    id="de"
                    src="https://restcountries.eu/data/deu.svg"
                    alt=""
                  />
                </button>
              </div>
              <h1>Góðan daginn!</h1>
              <Message lang={this.state.lang} />
              <form action="" id="form">
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
                <p className="fieldName">Login:</p>
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
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

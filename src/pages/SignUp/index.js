import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/logo/LOGO_SEMFUNDO_APLICATIVO.png";
import "./styles.css";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
    country: "",
    region: "",
    account: "user"
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  selectAccount(val) {
    this.setState({ account: val });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleSignUp = e => {
    e.preventDefault();
    const { username, email, password, country, region } = this.state;
    if (!username || !email || !password || !country || !region) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        console.log({ username, email, password });
        this.props.history.push("/init");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    const { country, region } = this.state;
    return (
      <div className="background">
        <form onSubmit={this.handleSignUp}>
          <div className="forms">
            <div className="imagelinkIn">
              <Link to="/">
                <img
                  className="img-sign-up"
                  src={Logo}
                  alt="logo-movie-match"
                />
              </Link>
            </div>
            {this.state.error && <p>{this.state.error}</p>}
            <label>
              User or Company:
              <select
                onChange={e => this.setState({ account: e.target.value })}
              >
                <option value="user">User</option>
                <option value="company">Company</option>
              </select>
            </label>
            <input
              type="text"
              placeholder={
                this.state.account === "user" ? "Username" : "Username / NIF / CNPJ"
              }
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              type="email"
              placeholder="E-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <CountryDropdown
              type="country"
              value={country}
              onChange={val => this.selectCountry(val)}
            />
            <RegionDropdown
              type="region"
              country={country}
              value={region}
              onChange={val => this.selectRegion(val)}
            />
            <button type="submit">Sign Up</button>
            <hr />
            <div className="signin">
              <p1>Have an account? </p1>
              <Link to="/signin">Sign in</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);

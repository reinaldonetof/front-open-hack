import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from '../../assets/logo/LOGO_SEMFUNDO_APLICATIVO.png'

import './styles.css'

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        console.log({ email, password });
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div className="background">
        <form onSubmit={this.handleSignIn}>
          <div className="forms">
            <div className="imagelinkIn">
              <Link to='/'>
                <img className="img-sign-in" src={Logo} alt="logo-movie-match" />
              </Link>
            </div>
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Sign In</button>
            <hr />
            <div className="signin">
              <p1>Want an account? </p1>
              <Link to="/signup">Sign Up for Free</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn);
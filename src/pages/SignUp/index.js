import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../../assets/logo/LOGO_SEMFUNDO_APLICATIVO.png'
import './styles.css';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: '',
  }

  handleSignUp = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        console.log({ username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="background">
        <form onSubmit={this.handleSignUp}>
          <div className="forms">
            <div className="imagelink">
              <Link to='/'>
                <img className="img-sign-up" src={Logo} alt="logo-movie-match" />
              </Link>
            </div>
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="text"
              placeholder="Nome de usuário"
              onChange={e => this.setState({ username: e.target.value })}
            />
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
            <button type="submit">Sign Up</button>
            <hr />
            <div className="signin">
              <p1>Have an account? </p1>
              <Link to="/signin">Sign in</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp);
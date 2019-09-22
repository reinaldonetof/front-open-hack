import React, { useState, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";

import { isAuthenticated, getId } from "../../services/auth";
import { authContext } from "../../contexts/AuthContext";
import Logo from "../../assets/logo/LOGO_SEMFUNDO_APLICATIVO.png";

import "./styles.css";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const handleSignIn = async e => {
    e.preventDefault();
    if (!email || !password) {
      setError("Fill in email and password to continue");
    } else {
      try {
        postJson();
      } catch (err) {
        setError(
          "There was a problem with login, please check your credentials. T.T"
        );
      }
    }
  };

  const postJson = async () => {
    setLoadingState(true);
    const jsonAll = {
      email: email,
      password: password
    };
    await axios
      .post("https://red-equinox-253000.appspot.com/login", jsonAll)
      .then(response => {
        setSuccess(true);
        setLoadingState(false);
        // auth.setAuthStatus({ id, email });
        // authenticJS();
      })
      .catch(e => {
        console.log(e.response);
        switch (e.response) {
          case 400:
            setError("Invalid fields T.T");
            break;
          case 405:
            setError("E-mail already registered");
            break;
          default:
            setError("There was an error to access your account. T.T");
            break;
        }
        setLoadingState(false);
      });
  };

  if (success) {
    return <Redirect to="/init" />;
  }

  return (
    <div className="background">
      <RingLoader
        className="ringloader"
        sizeUnit={"px"}
        size={150}
        color={"#ff3333"}
        loading={loadingState}
      />
      <form onSubmit={handleSignIn}>
        <div className="forms">
          <div className="imagelinkIn">
            <Link to="/">
              <img className="img-sign-in" src={Logo} alt="logo-movie-match" />
            </Link>
          </div>
          {error && <p>{error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
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
  );
};

export default withRouter(SignIn);

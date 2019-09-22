import React, { useState, useContext } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import Logo from "../../assets/logo/LOGO_SEMFUNDO_APLICATIVO.png";
import RingLoader from "react-spinners/RingLoader";
import "./styles.css";
import axios from "axios";
import { isAuthenticated } from "../../services/auth";

import { authContext } from "../../contexts/AuthContext";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const SignUp = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [success, setSuccess] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const auth = useContext(authContext);

  const selectCountry = val => {
    setCountry(val);
  };

  const selectRegion = val => {
    setRegion(val);
  };

  const handleSignUp = e => {
    e.preventDefault();
    if (!username || !email || !password || !country || !region) {
      setError("Fill all data to register");
    } else {
      try {
        postJson();
      } catch (err) {
        console.log(err);
        setError("There was an error registering your account. T.T");
      }
    }
  };

  const authenticJS = () => {
    const { id, email } = JSON.parse(window.localStorage.getItem("UserAuth"));
    isAuthenticated(!id && !email ? false : true);
  };

  const postJson = async () => {
    setLoadingState(true);
    const jsonAll = {
      name: username,
      nickname: username,
      email: email,
      password: password,
      gender: "string",
      description: "string",
      imgurl:
        "https://drive.google.com/file/d/1gVn8P4GCR1jLxcm1N8cGrZNmAAkC2XU9/view?usp=sharing",
      document: {
        country: country,
        region: region
      },
      isCompany: isCompany,
      specialtiesId: ["string"]
    };
    await axios
      .post("https://red-equinox-253000.appspot.com/User", jsonAll)
      .then(response => {
        setSuccess(true);
        console.log(response.data._path.segments[1]);
        setLoadingState(false);
        let id = response.data._path.segments[1];
        let email = jsonAll.email;
        auth.setAuthStatus({ id, email });
        authenticJS();
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
            setError("There was an error registering your account. T.T");
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
      <form onSubmit={handleSignUp}>
        <div className="forms">
          <div className="imagelinkIn">
            <Link to="/">
              <img className="img-sign-up" src={Logo} alt="logo-movie-match" />
            </Link>
          </div>
          {error && <p>{error}</p>}
          <label>
            User or Company:
            <select onChange={e => setIsCompany(e.target.value)}>
              <option value={false}>User</option>
              <option value={true}>Company</option>
            </select>
          </label>
          <input
            type="text"
            placeholder={
              isCompany === false ? "Username" : "Username / NIF / CNPJ"
            }
            onChange={e => setUsername(e.target.value)}
          />
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
          <CountryDropdown
            type="country"
            value={country}
            onChange={val => selectCountry(val)}
          />
          <RegionDropdown
            type="region"
            country={country}
            value={region}
            onChange={val => selectRegion(val)}
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
};

export default withRouter(SignUp);

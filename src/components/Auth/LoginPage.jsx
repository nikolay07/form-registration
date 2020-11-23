import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { fetchGetUsers } from "../auth.gateway";
import classNames from "classnames";
import "./loginform.scss";

export default function LoginPage() {
  const [auth, setAuth] = useState({ login: "", password: "" });
  const [chek, setCheck] = useState({ login: false, password: false });
  const [errors, setErrors] = useState({ login: null, password: null });
  const [data, setData] = useState([]);


  useEffect(() => {
    data.forEach((user) => {
      if (user.username === auth.login && user.password === auth.password) {
        alert("Success");
      }
    });
  }, [data]);

  const checked = <FontAwesomeIcon icon={faCheckCircle} color="green" />;
  const notChecked = <FontAwesomeIcon icon={faExclamationCircle} color="red" />;

  const buttonSubmit = classNames("form-button", {
    "button-green": chek.login && chek.password,
  });

  const showIconLogin = classNames("form-icon", {
    "form-icon_visible": auth.login,
  });
  const showIconPW = classNames("form-icon", {
    "form-icon_visible": auth.password,
  });

  const errMessage = {
    empty: "Should not be empty",
    longer: "Should be more 6 characters",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGetUsers().then((resp) => {
      setData(resp.data);
    });
    if (auth.login === "") {
      setErrors({ ...errors, login: errMessage.empty });
    } else if (auth.login.length < 6) {
      setErrors({ ...errors, login: errMessage.longer });
    } else if (auth.password === "") {
      setErrors({ ...errors, password: errMessage.empty });
    } else {
      // alert(`Login: ${auth.login}, Password: ${auth.password}`);
      setCheck({ ...chek, login: false, password: false });
      setAuth({ ...auth, login: "", password: "" });
    }
  };
  const handleLogin = (e) => {
    if (auth.login !== "" && auth.login.length > 6) {
      setCheck({ ...chek, login: true });
    } else {
      setCheck({ ...chek, login: false });
    }
    setErrors({ ...errors, login: "" });
    setAuth({ ...auth, login: e.target.value });
  };
  const handlePassword = (e) => {
    if (auth.password !== "" && auth.password.length > 6) {
      setCheck({ ...chek, password: true });
    } else {
      setCheck({ ...chek, password: false });
    }

    setAuth({ ...auth, password: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__control">
        <label htmlFor="login">Login</label>
        <input
          className=""
          id="login"
          name="login"
          value={auth.login}
          type="email"
          placeholder="e-mail"
          onChange={handleLogin}
          required
        />
        <span className={showIconLogin}>{chek.login ? checked : notChecked}</span>
        {/* {errors.login ? <span className="login-error">{errors.login}</span> : null} */}
      </div>
      <div className="form__control">
        <label htmlFor="password">Password</label>
        <input
          className=""
          onChange={handlePassword}
          id="password"
          value={auth.password}
          name="password"
          placeholder="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <span className={showIconPW}>{chek.password ? checked : notChecked}</span>
        {/* {errors.password ? <span className="login-error">{errors.password}</span> : null} */}
      </div>
      <button type="submit" className={buttonSubmit}>
        Log in
      </button>
    </form>
  );
}

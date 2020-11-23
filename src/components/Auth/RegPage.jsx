/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./regpage.scss";
import classNames from "classnames";
import { validateName, validateEmail, validatePassword, validatePhone, errMessage } from "./validation";
import { fetchPutUser } from "../auth.gateway";

export default function RegPage() {
  const checked = <FontAwesomeIcon icon={faCheckCircle} color="green" className="icon-green" />;
  const notChecked = <FontAwesomeIcon icon={faExclamationCircle} color="red" className="icon-red" />;

  const [auth, setAuth] = useState({ username: "", email: "", phone: "", password: "", re_password: "" });
  const [errors, setErrors] = useState({ username: "", email: "", phone: "", password: "", re_password: "" });

  const validateRePassword = (val) => (password !== val ? false : true);

  const togleClass = (field) =>
    classNames({
      success: !errors[field] && auth[field],
      error: errors[field] && auth[field],
    });

  const { username, email, phone, password, re_password } = auth;

  const validate = (func, data, val, err) => {
    !func(data) ? setErrors({ ...errors, [val]: errMessage[err] }) : setErrors({ ...errors, [val]: "" });
  };

  useEffect(() => {
    validate(validateName, username, "username", "longer");
  }, [username]);

  useEffect(() => {
    validate(validateEmail, email, "email", "valid");
  }, [email]);

  useEffect(() => {
    validate(validatePhone, phone, "phone", "format");
  }, [phone]);

  useEffect(() => {
    validate(validatePassword, password, "password", "password");
  }, [password]);

  useEffect(() => {
    validate(validateRePassword, re_password, "re_password", "re_password");
  }, [re_password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let noErrors = false;
    let fullFields = Object.values(auth).includes("");
    for (let key in errors) {
      if (errors[key]) noErrors = true;
    }
    if (!noErrors && !fullFields) {
      const data = { username, email, phone, password };
      fetchPutUser(data);
      alert(
        `Success!!!
        Login: ${username}, Email: ${email} Phone: ${phone} Password: ${password}`
      );
      setAuth({ ...auth, username: "", email: "", phone: "", password: "", re_password: "" });
    } else {
      alert("All fields must be filled");
    }
  };

  return (
    <div className="container">
      <div className="container__header">
        <h1>Create account</h1>
      </div>
      <form className="container__form" id="container__form" onSubmit={handleSubmit}>
        <div className={`container__form_control ${togleClass("username")}`}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            placeholder="John Doe example"
            id="username"
            name="username"
            onChange={(e) => setAuth({ ...auth, username: e.target.value })}
            value={username}
          />
          {checked}
          {notChecked}
          {errors.username ? <small>{errors.username}</small> : null}
        </div>
        <div className={`container__form_control ${togleClass("email")}`}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="email@example.com"
            id="email"
            name="email"
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
            value={email}
          />
          {checked}
          {notChecked}
          {errors.email ? <small>{errors.email}</small> : null}
        </div>
        <div className={`container__form_control ${togleClass("phone")}`}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            placeholder="+38097111111"
            id="phone"
            name="phone"
            onChange={(e) => setAuth({ ...auth, phone: e.target.value })}
            value={phone}
          />
          {checked}
          {notChecked}
          {errors.phone ? <small>{errors.phone}</small> : null}
        </div>
        <div className={`container__form_control ${togleClass("password")}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            autoComplete="off"
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            value={password}
          />
          {checked}
          {notChecked}
          {errors.password ? <small>{errors.password}</small> : null}
        </div>
        <div className={`container__form_control ${togleClass("re_password")}`}>
          <label htmlFor="re_password">Password repeat </label>
          <input
            type="password"
            placeholder="password"
            id="re_password"
            name="re_password"
            autoComplete="off"
            onChange={(e) => setAuth({ ...auth, re_password: e.target.value })}
            value={re_password}
          />
          {checked}
          {notChecked}
          {errors.re_password ? <small>{errors.re_password}</small> : null}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

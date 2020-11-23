import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo">Logo</div>
      <button className="header__login" type="button">
        Login
      </button>
    </section>
  );
};
export default Header;

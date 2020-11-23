import React from "react";
import "./main.scss";
import LoginPage from "../Auth/LoginPage";
// import RegPage from "../Auth/RegPage";

export default function Main() {
  return (
    <section className="main">
      {/* <RegPage /> */}
      <LoginPage />
    </section>
  );
}

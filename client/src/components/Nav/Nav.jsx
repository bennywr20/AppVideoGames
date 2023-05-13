import React from "react";
import Style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={Style.container_Nav}>
      <div className={Style.container_Nav_Title}>
        <span className={Style.container_Nav_Title_Span}>X</span>PlayGames
      </div>
      <nav className={Style.container_Nav_Nav}>
        <Link to="/">
          <button className={Style.container_Nav_Nav_Btn}>Home</button>
        </Link>
        <Link to="/home">
          <button className={Style.container_Nav_Nav_Btn}>VideoGames</button>
        </Link>

        <Link to="/form">
          <button className={Style.container_Nav_Nav_Btn}>CreateGames</button>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;

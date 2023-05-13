import React from "react";
import { Link } from "react-router-dom"
import Style from "./LandingPage.module.css";
const LandingPageComponent = () => {
  return (
    <div className={Style.container_LandingPage}>
      <h1 className={Style.container_LandingPage_title}>VideoGames App</h1>
      <p className={Style.container_LandingPage_subTitle}>
        Aplicacion creada para mi pryecto PI
      </p>
      <Link to="/home">
      <button className={Style.container_LandingPage_btnStart}>
        Get Start
      </button>
      </Link>
      <div className={Style.container_LandingPage_Wave1}>
        <span className={Style.container_LandingPage_Wave2_span1}>_</span>
        <span className={Style.container_LandingPage_Wave2_span2}>_</span>
        <span className={Style.container_LandingPage_Wave2_span3}>♠</span>
        <span className={Style.container_LandingPage_Wave2_span4}>-</span>
        <span className={Style.container_LandingPage_Wave2_span5}>-</span>
        <span className={Style.container_LandingPage_Wave2_span6}>_</span>
      </div>
    </div>
  );
};

export default LandingPageComponent;

import React from "react";
import Style from "./CardsDetails.module.css";
import { Link } from "react-router-dom";

const CardDetails = ({
  id,
  name,
  image,
  genres,
  description,
  released,
  rating,
  platforms,
}) => {
  return (
    <div className={Style.container_CardDetails}>
      <div
        className={Style.container_CardDetails_header}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Link to={"/home"}>
          <button className={Style.container_CardDetail_comeBack}>Back</button>
        </Link>
        <div className={Style.container_CardDetail_containerTitle}>
          <h1 className={Style.container_CardDetail_title}>{name}</h1>
        </div>
        <div className={Style.container_CardDetail_containerImage}>
          <img
            src={image}
            alt={name}
            className={Style.container_CardDetail_image}
          />
        </div>
      </div>

      <div className={Style.container_CardDetails_containerDescription}>
        <p className={Style.container_CardDetails_TitleDescription}>
          Description
        </p>
        <p className={Style.container_CardDetails_description}>
          {description.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
      </div>

      <div
        style={{ backgroundImage: `url(${image})` }}
        className={Style.container_CardDetails_containerGenres}
      >
        <p className={Style.container_CardDetails_containerTitleGenres}>
          Genres
        </p>
        <div className={Style.container_CardDetails_container_GGenres}>
          {genres &&
            genres.map((pos) => {
              return <p key={pos.name}>{pos.name + " "}</p>;
            })}
        </div>
      </div>
      <div className={Style.container_CardDetails_conatinerPlat}>
        <p className={Style.container_CardDetails_TitlePlat}>Platforms</p>

        <div>
          {platforms &&
            platforms.map((pos) => {
              return (
                <span className={Style.container_CardDetails_plat} key={pos.platform.id}>
                  {pos.platform.name + " - "}
                </span>
              );
            })}
        </div>
      </div>
      <div className={Style.container_CardDetails_footer}>
        <div>
          <p className={Style.container_CardDetails_footerTitleR}>
            Released
          </p>
          <p className={Style.container_CardDetails_footerR}>{released}</p>
        </div>
        <div>
          <p className={Style.container_CardDetails_footerTitleR}>Rating</p>
          <p className={Style.container_CardDetails_footerR}>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
/*

     
*/

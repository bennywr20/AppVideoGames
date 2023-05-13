import React from "react";
import { Link } from "react-router-dom";
import Style from "./Cards.module.css";

const Card = ({ name, image, genres, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className={Style.container_Card}>
        <div className={Style.img_container}>
          <img src={image} alt={name} className={Style.image} />
        </div>
        <h1 className={Style.title}>{name}</h1>
        {
          <div>
            {genres.map((pos) => {
              return <span key={pos.name}>{pos.name} </span>;
            })}
          </div>
        }
      </div>
    </Link>
  );
};

export default Card;

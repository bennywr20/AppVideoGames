import React from "react";
import Card from "./Card";
import Style from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = () => {
  const { pagina, porPagina, gamesFound } = useSelector((state) => state);
  return (
    <div className={Style.container_Cards}>
      {gamesFound.length ? (
        gamesFound
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((pos) => {
            return (
              <Card
                key={pos.id}
                id={pos.id}
                name={pos.name}
                image={pos.image}
                genres={pos.genres}
              />
            );
          })
      ) : (
        <h2 className={Style.loading}>Results</h2>
      )}
    </div>
  );
};

export default Cards;

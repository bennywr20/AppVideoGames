import React from "react";
import Style from "./Pagination.module.css"
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";

const Paginacion = () => {
  const dispatch = useDispatch();
  const { allVideogames, gamesFound, porPagina, pagina } = useSelector(
    (state) => state
  );
  const videogames = gamesFound.length || allVideogames.length;
  const maximo = Math.round(videogames / porPagina);

  return (
    <div className={Style.container_Pagination}>
      <button className={Style.container_Pagination_Btn} onClick={() => dispatch(prevPage())} disabled={pagina === 1}>
        prev
      </button>
      <span>
        {pagina} / {maximo === 0 ? 1 : maximo}
      </span>
      {pagina > maximo - 1 ? (
        <button className={Style.container_Pagination_Btn} disabled>Next</button>
      ) : (
        <button className={Style.container_Pagination_Btn} onClick={() => dispatch(nextPage())}>Next</button>
      )}
    </div>
  );
};

export default Paginacion;

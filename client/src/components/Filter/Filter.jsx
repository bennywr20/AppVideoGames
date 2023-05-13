import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderCards,
  filterCards,
  placesCards,
  genresCards,
} from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  return (
    <div>
      <select
        name="ordenBy"
        onChange={(e) => dispatch(orderCards(e.target.value))}
      >
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
      </select>
      <select
        name="filterWay"
        onChange={(e) => dispatch(filterCards(e.target.value))}
      >
        <option value="Name">Name</option>
        <option value="Rating">Rating</option>
      </select>
      <select
        name="filterBy"
        onChange={(e) => dispatch(placesCards(e.target.value))}
      >
        <option value="All">All</option>
        <option value="API">API</option>
        <option value="DDBB">Created</option>
      </select>
      <select
        name="filterGenres"
        onChange={(e) => dispatch(genresCards(e.target.value))}
      >
        <option value="All">All</option>
        {genres.length !== 0 ? (
          genres.map((gen) => (
            <option key={gen.id} value={gen.name}>
              {gen.name}
            </option>
          ))
        ) : (
          <option>cargando..</option>
        )}
      </select>
    </div>
  );
};

export default Filter;

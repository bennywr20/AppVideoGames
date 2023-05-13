import React, { useState } from "react";
import Style from "./Search.module.css";
import axios from "axios";
import Filter from "../Filter/Filter";
import { useDispatch } from "react-redux";
import { addGamesName } from "../../redux/actions";

const SearchBar = () => {
  const [gamesSearch, setGameName] = useState("");
  const dispatch = useDispatch();

  const searchGames = async (value) => {
    try {
      const gamesSerch = await axios.get(
        `http://localhost:3001/videogames?name=${value}`
      );

      dispatch(addGamesName(gamesSerch.data));
      setGameName("");
    } catch {
      setGameName("");
      alert("Games Not Found");
    }
  };

  const handleChange = (event) => {
    setGameName(event.target.value);
  };

  return (
    <div className={Style.container_searchBar}>
      <Filter />

      <div className={Style.container_inputs}>
        <input
          className={Style.container_inputs_search}
          type="text"
          name="text"
          placeholder="Search games"
          value={gamesSearch}
          onChange={(event) => handleChange(event)}
        />
        <button
          className={Style.container_inputs_button}
          onClick={() => searchGames(gamesSearch)}
        >
          Search
        </button>
        <button
          className={Style.container_inputs_button}
          onClick={() => searchGames(" ")}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

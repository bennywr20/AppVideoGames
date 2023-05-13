import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Paginacion from "../components/Paginacion/Paginacion.jsx";
import Nav from "../components/Nav/Nav.jsx";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideogames, addGenres } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const urls = [
      "http://localhost:3001/videogames",
      "http://localhost:3001/genres",
    ];

    const getVideogames = async () => {
      const videogames = await axios.get(urls[0]);
      dispatch(addVideogames(videogames.data));
      const genres = await axios.get(urls[1]);

      dispatch(addGenres(genres.data.data));
    };

    getVideogames();
  }, [dispatch]);
  return (
    <>
      <Nav />
      <SearchBar />
      <Paginacion />
      <Cards />
    </>
  );
};

export default Home;

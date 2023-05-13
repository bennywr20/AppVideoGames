require("dotenv").config();
const axios = require("axios");
const { genresConverter } = require("./helpers");
const { API_KEY } = process.env;


///////////////////////////////////////////////////////

const controllerGetAllGenres = async () => {
  const genresGames = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  return genresConverter(genresGames.data.results);
};

///////////////////////////////////////////////////////

module.exports = {
  controllerGetAllGenres,
};

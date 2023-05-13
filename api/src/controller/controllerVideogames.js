require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Op } = require("sequelize");
const { Videogame, Genres } = require("../db");
const { converter, err, getGamesFromApi, format } = require("./helpers");

////////////////////////////////////////////////////////////////////////////////////////////////////
///////////Este controller se encargar de obtener todos los datos , tanto de la api como de la DDBB

const controllerGetAllVideogames = async () => {
  try {
    const videogamesApi = await getGamesFromApi(API_KEY);
    const videogameDB = await Videogame.findAll({
      include: Genres,
    });

    return [...format(videogameDB), ...converter(videogamesApi)];
  } catch {
    return err;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////
///////Este controller se encargar de obtener los datos de la api y de la DDBB por Name

const controllerGetAllVideogamesByName = async (name) => {
  try {
    const videogameDB = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: Genres,
    });

    const videogameApi = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    );
    if (videogameDB.length === 0 && videogameApi.data.results.length === 0) {
      throw err;
    }
    return [
      ...format(videogameDB),
      ...converter(videogameApi.data.results),
    ].slice(0, 15);
  } catch {
    return err;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////
/////////Esta funcion se encargar de obtener el dato con el id indicado

const controllerGetAllVideogamesById = async (gameId) => {
  try {
    if (gameId.length > 10) {
      const gameFoundFromDB = await Videogame.findByPk(gameId, {
        include: Genres,
      });

      return [...format([gameFoundFromDB])];
    }

    const gameFoundFromAPI = await axios.get(
      `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
    );
    return [...converter([gameFoundFromAPI.data])];
  } catch {
    return err;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////Este controller se encargar de la creacion de los juegos

const controllerCreateVideogame = async (body) => {
  const { name, description, platforms, image, released, rating, genres } =
    body;
  try {
    const gameCreated = await Videogame.create({
      name,
      description,
      platforms,
      image,
      released,
      rating,
    });

    await gameCreated.addGenres(genres);
    return gameCreated;
  } catch (err) {
    return [
      {
        error: "Something went wrong with the creation of the videogame!",
        dataError: err,
      },
    ];
  }
};

///////////////////////////////////////////////////////

module.exports = {
  controllerGetAllVideogames,
  controllerGetAllVideogamesByName,
  controllerGetAllVideogamesById,
  controllerCreateVideogame,
};

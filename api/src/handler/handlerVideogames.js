const {
  controllerGetAllVideogames,
  controllerGetAllVideogamesByName,
  controllerGetAllVideogamesById,
  controllerCreateVideogame,
} = require("../controller/controllerVideogames");

////////////////////////////////////////////////////////////////////////////////////////
///Este manejador se encargar de requerir los datos Por name y a su ves todo los datos

const handlerGetVideogames = async (req, res) => {
  const { name } = req.query;
  if (name) {
    const videogames = await controllerGetAllVideogamesByName(name);
    if (videogames[0].error) return res.status(404).json(videogames);
    return res.status(200).json(videogames);
  }

  const videogames = await controllerGetAllVideogames();
  if (videogames[0].error) return res.status(404).json(videogames);
  return res.status(200).json(videogames);
};
////////////////////////////////////////////////////////////////////////////////////////
/////////Este manejador se encargar de buscar los datos por id

const handlerGetVideogameById = async (req, res) => {
  const { id } = req.params;
  const videogame = await controllerGetAllVideogamesById(id);
  if (videogame[0].error) return res.status(404).json(videogame);
  return res.status(200).json(videogame);
};

const handlerCreateVideogames = async (req, res) => {
  const body = req.body;
  const videogame = await controllerCreateVideogame(body);

  if (videogame.name) return res.status(200).json(videogame);
  return res.status(404).json(videogame);
};

module.exports = {
  handlerGetVideogames,
  handlerGetVideogameById,
  handlerCreateVideogames,
};

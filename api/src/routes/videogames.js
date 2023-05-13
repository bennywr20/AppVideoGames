const { Router } = require("express");
const {
  handlerGetVideogames,
  handlerGetVideogameById,
  handlerCreateVideogames,
} = require("../handler/handlerVideogames");

const routerGames = Router();

routerGames.get("/", handlerGetVideogames);

routerGames.get("/:id", handlerGetVideogameById);

routerGames.post("/", handlerCreateVideogames);

module.exports = routerGames;

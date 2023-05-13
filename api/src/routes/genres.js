const { Router } = require("express");
const { getAllGenres } = require("../handler/handlerGenres");

const routerGenres = Router();

routerGenres.get("/" , getAllGenres)

module.exports = routerGenres
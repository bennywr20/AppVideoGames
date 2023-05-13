const { Router } = require('express');
const routerGames = require('./videogames');
const routerGenres = require('./genres');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/videogames" , routerGames)
router.use("/genres" , routerGenres)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

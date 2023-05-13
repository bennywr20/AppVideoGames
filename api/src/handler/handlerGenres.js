const { controllerGetAllGenres } = require("../controller/controllerGenres");
const { Genres } = require("../db");

////////////////////////////////////////////////////////////////////////////////////////
//////Este manejadro se encarga obtener los generos
const getAllGenres = async (req, res) => {
  try {
    const allGenres = await Genres.findAll();
    if (allGenres.length === 0) {
      await Genres.bulkCreate(await controllerGetAllGenres());

      return res
        .status(200)
        .json({ success: "All ready", data: await Genres.findAll() });
    }
    return res.status(200).json({ success: "All Ready", data: allGenres });
  } catch (error) {
    return res.status(500).json([{ error: "Something went wrog'" }]);
  }
};

module.exports = {
  getAllGenres,
};

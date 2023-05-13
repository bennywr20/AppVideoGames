const axios = require("axios");
///////////////////////////////////////////////////////////////////////////////////////////////
////Esta funcion se encarga de darle una estructura a los Games de DDBB , similar a la de APi

const format = (value) => {
  return value.map((res) => {
    return {
      id:res.id,
      name: res.name,
      description: res.description,
      released: res.released,
      image: res.image,
      rating: res.rating,
      platforms: [
        ...res.platforms.map((pos) => {
          return { platform: { name: pos } };
        }),
      ],
      genres: [
        ...res.genres.map((pos) => {
          return { name: pos.name };
        }),
      ],
    };
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////
///////Esta funcion se encargar de tomar los datos que se necesitan de la Api

const converter = (value) => {
  if (value.length === 0) return [];

  return value.map((res) => {
    return {
      id: res.id,
      name: res.name,
      description: res.description,
      released: res.released,
      image: res.background_image || res.image,
      rating: res.rating,
      platforms: res.platforms,
      genres: res.genres,
    };
  });
};

////////////////////////////////////////////////////////////////////////////
//////Esta funcion se encargar de traer todos los juegos desde la APi
const getGamesFromApi = async (API_KEY) => {
  
  const next1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
  const next2 = await axios.get(next1.data.next);
  const next3 = await axios.get(next2.data.next);
   const next4 = await axios.get(next3.data.next);
  const next5 = await axios.get(next4.data.next); 
   

  return [
    ...next1.data.results,
    ...next2.data.results,
    ...next3.data.results,
     ...next4.data.results,
    ...next5.data.results, 
  ];
};
////////////////////////////////////////////////////////////////////////////
////Este es un mensaje de Error

const err = [{ error: "Videogame not found" }];


////////////////////////////////////////////////////////////////////////////
/////Esta funcion se encargar de darle una estructura a los genres de la Api

const genresConverter = (value) => {
  return value.map((el) => {
    return { name: el.name };
  });
};

////////////////////////////////////////////////////////////////////////////
///////////Todas las exportaciones

module.exports = {
  genresConverter,
  getGamesFromApi,
  converter,
  format,
  err
};

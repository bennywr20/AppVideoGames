export const ADD_GENRES = "ADD_GENRES";
export const ADD_VIDEOGAMES = "ADD_VIDEOGAMES";
export const ADD_GAMESNAME = "ADD_GAMESNAME";
export const ORDER = "ORDER";
export const PLACES = "PLACES";
export const FILTER = "FILTER";
export const FILTER_GENRES = "FILTER_GENRES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";


export const addGenres = (genres) => {

  return { type: ADD_GENRES, payload: genres};
};



export const addVideogames = (videogames) => {

  return { type: ADD_VIDEOGAMES, payload: videogames };
};


export const addGamesName = (videogames) => {

  return { type: ADD_GAMESNAME, payload: videogames };
};

export const orderCards = (state) => {
  return { type: ORDER, payload: state}
};

export const filterCards = (state) => {
  return { type: FILTER, payload: state }
}

export const placesCards = (state) => {
  return { type: PLACES, payload: state }
}

export const genresCards = (state) => {
  return { type: FILTER_GENRES, payload: state }
}


export const nextPage = () => {

  return { type: NEXT_PAGE, payload: 1 };
};

export const prevPage = () => {

  return { type: PREV_PAGE, payload: 1 };
};

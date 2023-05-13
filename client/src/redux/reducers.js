import { orderGames, WhatGames } from "./helpers";
import {
  ADD_VIDEOGAMES,
  NEXT_PAGE,
  PREV_PAGE,
  ADD_GAMESNAME,
  ORDER,
  FILTER,
  PLACES,
  ADD_GENRES,
  FILTER_GENRES,
} from "./actions";

const initialState = {
  genres: [],
  allVideogames: [],
  gamesFoundCurrent: [],
  gamesFound: [],
  filter: {
    order: "Ascendente",
    type: "Name",
    places: "All",
    genres: "All",
  },
  pagina: 1,
  porPagina: 15,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_GENRES: {
      return {
        ...state,
        genres: payload,
      };
    }

    case ADD_VIDEOGAMES: {
      return {
        ...state,
        allVideogames: payload,
        gamesFound: orderGames(
          payload,
          state.filter.type,
          state.filter.order,
          state.filter.places,
          state.filter.genres
        ),
      };
    }
    case ADD_GAMESNAME: {
      return {
        ...state,
        pagina: 1,
        gamesFoundCurrent: payload,
        gamesFound: payload,
      };
    }
    case PLACES:
      const gamesP = WhatGames(state.gamesFoundCurrent, state.allVideogames);
      return {
        ...state,
        filter: {
          ...state.filter,
          places: payload,
        },
        pagina: 1,
        gamesFound: orderGames(
          gamesP,
          state.filter.type,
          state.filter.order,
          payload,
          state.filter.genres
        ),
      };
    case FILTER:
      const gamesF = WhatGames(state.gamesFoundCurrent, state.allVideogames);
      return {
        ...state,
        filter: {
          ...state.filter,
          type: payload,
        },
        pagina: 1,
        gamesFound: orderGames(
          gamesF,
          payload,
          state.filter.order,
          state.filter.places,
          state.filter.genres
        ),
      };
    case FILTER_GENRES:
      const gamesG = WhatGames(state.gamesFoundCurrent, state.allVideogames);
      return {
        ...state,
        filter: {
          ...state.filter,
          genres: payload,
        },
        pagina: 1,
        gamesFound: orderGames(
          gamesG,
          state.filter.type,
          state.filter.order,
          state.filter.places,
          payload
        ),
      };
    case ORDER: {
      const gamesO = WhatGames(state.gamesFoundCurrent, state.allVideogames);
      return {
        ...state,
        filter: {
          ...state.filter,
          order: payload,
        },
        pagina: 1,
        gamesFound: orderGames(
          gamesO,
          state.filter.type,
          payload,
          state.filter.places,
          state.filter.genres
        ),
      };
    }
    case NEXT_PAGE: {
      return {
        ...state,
        pagina: state.pagina + payload,
      };
    }
    case PREV_PAGE: {
      return {
        ...state,
        pagina: state.pagina - payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

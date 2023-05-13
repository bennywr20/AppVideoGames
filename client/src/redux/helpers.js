const filterGenres = (genres, games) => {
  if (genres === "All") {
    return games;
  }

  const filteredGames = games.filter((game) => {
    return game.genres.some((genre) => genre.name === genres);
  });

  if (filteredGames.length === 0) {
    alert(`Sin resultados para el genero ${genres}`);
    return games;
  }

  return filteredGames;
};

const filterGameByPlaces = (places, games) => {
  if (places === "API") {
    return games.filter((game) => typeof game.id === "number");
  } else if (places === "DDBB") {
    return games.filter((game) => typeof game.id === "string");
  } else {
    return games;
  }
};

////Esta funcion es la que se encargar del filtrado///////

export const orderGames = (games, type, order, places, genres) => {
  if (order === "Ascendente") {
    if (type === "Name") {
      const gamesFiltered = filterGameByPlaces(places, games);
      const genresFiltered = filterGenres(genres, gamesFiltered);
      return genresFiltered.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (type === "Rating") {
      const gamesFiltered = filterGameByPlaces(places, games);
      const genresFiltered = filterGenres(genres, gamesFiltered);
      return genresFiltered.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    }
  }

  if (order === "Descendente") {
    if (type === "Name") {
      const gamesFiltered = filterGameByPlaces(places, games);
      const genresFiltered = filterGenres(genres, gamesFiltered);
      return genresFiltered
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .reverse();
    }
    if (type === "Rating") {
      const gamesFiltered = filterGameByPlaces(places, games);
      const genresFiltered = filterGenres(genres, gamesFiltered);
      return genresFiltered
        .sort((a, b) => (a.rating > b.rating ? 1 : -1))
        .reverse();
    }
  }
  return games;
};

export const WhatGames = (gamesFound, allGames) =>
  gamesFound.length ? gamesFound : allGames;

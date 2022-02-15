const baseUrl = "http://localhost:8000/api/favourite";

const getFavourites = (token) => {
  return fetch(`${baseUrl}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const addToFavourites = (movieId, token) => {
  return fetch(`${baseUrl}`, {
    method: "POST",
    body: JSON.stringify({
      movieId: movieId,
    }),
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export default {
  getFavourites,
  addToFavourites,
};

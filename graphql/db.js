import axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};

// fetch
// export const getMovies = (limit, rating) =>
//   fetch(`${API_URL}`)
//     .then((resp) => resp.json())
//     .then((json) => json.data.movies);

// memory
// let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 11,
//   },
//   {
//     id: 1,
//     name: "Avengers - The new one",
//     score: 8,
//   },
//   {
//     id: 2,
//     name: "The Godfather 1",
//     score: 99,
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 2,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.fileter((movie) => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   console.log(movies, cleanedMovies);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: Number(`${movies.length}`),
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return movies;
// };

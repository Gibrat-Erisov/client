import { movies } from "../API/movies";

const setMoviesAll = allMovies => ({ type: "SET_MOVIES", allMovies });

export const getMovies = () => {
  return dispatch => {
    movies.getMovies().then(Movies => {
      console.log(Movies);
      dispatch(setMoviesAll(Movies));
    });
  };
};

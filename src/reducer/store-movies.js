let initialState = {
  movies: []
};

const charts = (state = initialState, aciton) => {
  switch (aciton.type) {
    case "SET_MOVIES":
      console.log(aciton.allMovies);
      return {
        ...state,
        movies: [...aciton.allMovies]
      };

    default:
      return state;
  }
};

export default charts;

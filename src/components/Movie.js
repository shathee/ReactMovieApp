import React from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  const poster =
  movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <Grid item xs={4}>
      <img
        srcSet={poster}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
    </Grid>

    
  );
};


export default Movie;
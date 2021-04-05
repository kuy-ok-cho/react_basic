import PropTypes from "prop-types";
import React from "react";

function Movie({ id, title, year, summary, post }) {
  return <h4>{title}</h4>;
}

Movie.propType = {
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;

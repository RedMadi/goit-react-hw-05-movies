import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '6c1f11195924715b049a64034d3aea97';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${apiKey}`);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${apiKey}`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${apiKey}`
  );
  return response.data.cast;
};
export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${apiKey}`
  );
  return response.data.results;
};

export const getMovieByKeyWord = async query => {
  const response = await axios.get(
    `search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
  );
  return response.data.results;
};
// export const getMovieByKeyWord = async keyword => {
//   const response = await axios.get(
//     `search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${keyword}`
//   );
//   return response.data.results;
// };

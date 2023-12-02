import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API/MoviesApi';
import List from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovies()
      .then(trendingMovies => {
        setTrendingMovies(trendingMovies);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <List trendingMovies={trendingMovies} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;

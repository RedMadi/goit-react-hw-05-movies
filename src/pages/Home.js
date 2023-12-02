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
// import React, { useEffect, useState } from 'react';
// import { getTrendingMovies } from 'API/MoviesApi';
// import List from 'components/List/List';
// import { Loader } from 'components/Loader/Loader';

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         setLoading(true);
//         const trendingData = await getTrendingMovies();
//         setTrendingMovies(trendingData);
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrendingMovies();
//   }, []);

//   return (
//     // <main>
//     //   <h1>Trending Movies</h1>
//     //   <ul>
//     //     {trendingMovies.map(movie => (
//     //       <li key={movie.id}>
//     //         <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </main>
//     <main>
//       <h1>Trending Movies</h1>
//       <List trendingMovies={trendingMovies} />

//       {loading && <Loader />}
//     </main>
//   );
// };
// export default Home;

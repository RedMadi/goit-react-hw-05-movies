import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import List from 'components/List/List';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovieByKeyWord } from 'API/MoviesApi';
import { Alert } from './Movies.styled';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listEmpty, setListEmpty] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmParam = value => {
    setSearchParams({ search: value });
  };

  const query = searchParams.get('search');

  useEffect(() => {
    if (query !== null) {
      setLoading(true);
      getMovieByKeyWord(query)
        .then(searchResults => {
          setSearchFilms(searchResults);
          searchResults.length === 0 && setListEmpty(true);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <main>
      <SearchForm func={filmParam} />
      {loading && <Loader />}
      {searchFilms && <List trendingMovies={searchFilms} />}
      {listEmpty && <Alert>No movies matching search query</Alert>}
    </main>
  );
};

export default Movies;

import { LinkMovies, MovieItem } from './List.styled';
import { useLocation } from 'react-router-dom';

const List = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <dl>
      {trendingMovies.map(trendingMovie => (
        <MovieItem key={trendingMovie.id}>
          <LinkMovies to={`/movies/${trendingMovie.id}`}>
            {trendingMovie.title}
          </LinkMovies>
        </MovieItem>
      ))}
    </dl>
  );
};

export default List;

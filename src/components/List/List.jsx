import { LinkMovies, MovieItem } from './List.styled';

const List = ({ trendingMovies }) => {
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

//test

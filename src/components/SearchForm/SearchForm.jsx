import { useState } from 'react';
import { Input, Form, Button } from './SearchForm.styled';

const SearchForm = ({ func }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    const filmName = e.target.value;
    setValue(filmName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    func(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="value"
        autoFocus
        placeholder="Enter the movie title"
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;

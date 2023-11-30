import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from './Form.styled';
import { StyleForm } from './Form.styled';
export const Form = ({ requestFilms }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    requestFilms({ inputValue });
    setInputValue('');
  };
  return (
    <StyleForm onSubmit={handleSubmit}>
      <input
        style={{ fontSize: 30 }}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={inputValue}
        onChange={handleChange}
      />
      <Button type="submit">SUBMIT</Button>
    </StyleForm>
  );
};
Form.propTypes = {
  requestFilms: PropTypes.func.isRequired,
};

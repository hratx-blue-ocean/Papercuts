import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBookClubs = ({ history, placeholder, variant, searchVariant }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/clubs/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline variant={variant}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={placeholder}
        className='ml-sm-5 mr-sm-2'
      ></Form.Control>
      <Button type='submit' variant={searchVariant} className='p-2'>
        Search
      </Button>
    </Form>
  );
};

SearchBookClubs.defaultProps = {
  variant: 'light',
  placeholder: 'Search Book Clubs...',
  searchVariant: 'outline-success',
};

export default SearchBookClubs;

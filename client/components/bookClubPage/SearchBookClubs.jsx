import React, { useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import { Link } from 'react-router-dom';

const SearchBookClubs = ({ setFound, placeholder, variant, search }) => {
  const {
    club,
    clubs,
    keyword,
    updateKeyword,
    getClubByName,
    getClubById,
    fuzzyClubSearch
  } = useContext(AppContext);

  useEffect(() => {
    if (keyword !== '') {
      fuzzyClubSearch(keyword, clubs);
    }
  }, [keyword]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword !== '') {
      getClubByName(keyword);

      if (keyword === club.name) {
        setFound(true);
      } else {
        getClubById(club._id);
        setFound(false);
      }
      updateKeyword('');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline variant={variant}>
      <Form.Control
        type='text'
        name='q'
        value={keyword}
        onChange={(e) => updateKeyword(e.target.value)}
        placeholder={placeholder}
        className='mr-1'
      ></Form.Control>
      <Button type='submit' variant={search} className='mx-1'>
        Search
      </Button>
      <Button to='/clubs/create' as={Link} variant='outline-secondary' className='mx-1'>
        Create Your Own!
      </Button>
    </Form>
  );
};

SearchBookClubs.defaultProps = {
  variant: 'light',
  placeholder: 'Search Book Clubs...',
  search: 'outline-success'
};

export default SearchBookClubs;

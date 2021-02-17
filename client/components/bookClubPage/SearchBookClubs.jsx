import React, { useState, useEffect, useRef, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

const SearchBookClubs = ({
  history,
  setSearching,
  setFound,
  placeholder,
  variant,
  searchVariant
}) => {
  const { club, success, getClubByName, getClubById } = useContext(AppContext);
  const ref = useRef(club);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (keyword !== '') {
      setSearching(true);
    } else {
      setSearching(false);
    }
    console.log(keyword);
  }, [keyword, success, club]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword !== '') {
      // history.push(`/clubs/search/${keyword}`);
      setSearching(true);
      getClubByName(keyword);

      if (keyword === club.name) {
        setFound(true);
      } else {
        getClubById(club._id);
        setFound(false);
      }
      setKeyword('');
      setSearching(false);
    } else {
      // history.push('/');
      setSearching(false);
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
  searchVariant: 'outline-success'
};

export default SearchBookClubs;

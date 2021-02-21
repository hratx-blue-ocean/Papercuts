import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

const SearchBookClubs = () => {
  const {
    club,
    clubs,
    updateFound,
    fuzzyClubs,
    keyword,
    updateKeyword,
    getClubByName,
    getClubById,
    fuzzyClubSearch
  } = useContext(AppContext);
  const [option, setOption] = useState(0);

  useEffect(() => {
    if (keyword !== '') {
      fuzzyClubSearch(keyword, clubs);
    }
  }, [keyword]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword !== '') {
      if (option) {
        // console.log('FUZZY: ', `(${fuzzyClubs[option - 1].item.name})`);
        getClubById(fuzzyClubs[option - 1].item._id);
        updateFound(true);
        setOption(0);
      } else {
        if (keyword === club.name) {
          getClubByName(keyword);
          updateFound(true);
        } else {
          getClubById(club._id);
          updateFound(false);
        }
      }
    }

    updateKeyword('');
  };

  return (
    <Form autoComplete='off' onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        value={keyword}
        onChange={(e) => updateKeyword(e.target.value)}
        placeholder='Search Book Clubs...'
        className='ml-sm-5 mr-sm-2'
      />
      <Button type='submit' className='p-2'>
        Search
      </Button>
      {keyword !== '' && fuzzyClubs.length > 0 && (
        <Button
          type='submit'
          onClick={() => setOption(1)}
          className='btn-text text-muted p-0 pl-2 m-0'
          style={{ fontSize: '0.94rem' }}
        >
          {fuzzyClubs[0].item.name.substr(0, fuzzyClubs[0].item.name.length)}
        </Button>
      )}
      {keyword !== '' && fuzzyClubs.length > 2 && (
        <Fragment>
          <span className='text-muted'>, </span>
          <Button
            type='submit'
            onClick={() => setOption(2)}
            className='btn-text text-muted p-0 pl-1 m-0'
            style={{ fontSize: '0.94rem' }}
          >
            {fuzzyClubs[1].item.name.substr(0, fuzzyClubs[1].item.name.length)}
          </Button>
        </Fragment>
      )}
      {keyword !== '' && fuzzyClubs.length > 2 && (
        <Fragment>
          <span className='text-muted'>, </span>
          <Button
            type='submit'
            onClick={() => setOption(3)}
            className='btn-text text-muted p-0 pl-1 m-0'
            style={{ fontSize: '0.94rem' }}
          >
            {fuzzyClubs[2].item.name.substr(0, fuzzyClubs[2].item.name.length)}
          </Button>
        </Fragment>
      )}
    </Form>
  );
};

export default SearchBookClubs;

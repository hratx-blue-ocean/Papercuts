import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

const BookClubItem = ({ current }) => {
  const { getClubById } = useContext(AppContext);

  const handleClicked = () => {
    getClubById(current._id);
    // console.log('clicked: ', current._id);
  };

  return (
    <Container className='my-1 p-1'>
      {/* <Card.ImgOverlay>
          <Card.Text className='text-white text-center font-weight-bold pt-1'>{title}</Card.Text>
        </Card.ImgOverlay> */}
      <Image
        src={current.thumbnail || ''}
        rounded
        fluid
        style={{ width: '320px', height: '200px', maxWidth: '320px' }}
        onClick={handleClicked}
      />
    </Container>
  );
};

export default BookClubItem;

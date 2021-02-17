import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

const BookClubItem = ({ current }) => {
  const { club, getClubById } = useContext(AppContext);

  const handleClicked = () => getClubById(current._id);

  return (
    <Container className='my-1 p-1' onClick={handleClicked}>
      {/* <Card.ImgOverlay>
          <Card.Text className='text-white text-center font-weight-bold pt-1'>{title}</Card.Text>
        </Card.ImgOverlay> */}
      <Image
        src={club.thumbnail || ''}
        rounded
        fluid
        style={{ maxWidth: '320px' }}
      />
    </Container>
  );
};

export default BookClubItem;

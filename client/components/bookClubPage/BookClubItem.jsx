import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import default_bookclub from '../../assets/images/bookclubs_sample/bookclub_6.svg';

const BookClubItem = ({ id, title, desc, splash, imgVariant }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Link to={`/clubs/${id}`}>
      <Container className='my-1 p-1'>
        {/* <Card.ImgOverlay>
          <Card.Text className='text-white text-center font-weight-bold pt-1'>{title}</Card.Text>
        </Card.ImgOverlay> */}
        <Image src={default_bookclub} alt='Bookclub image' rounded style={{ maxWidth: '300px' }} />
      </Container>
    </Link>
  );
};

BookClubItem.defaultProps = {
  id: 1,
  title: 'Books Anonymous',
  desc:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil nisi ea nam consectetur...',
  splash: default_bookclub,
};

export default BookClubItem;

import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import default_splash from '../../assets/images/bookclubs_sample/marvel_splash.svg';

export default function ClubBanner({ name, description, members, image, variant }) {
  let numMembers = 0;
  members ? (numMembers = members.length) : {};

  return (
    <div className='d-flex justify-content-between my-2'>
      <Image src={image} rounded fluid style={{ maxWidth: '640px' }} />
      <Container>
        <h2>
          <strong>{name}</strong>{' '}
          <Button variant='outline-info' disabled>{`${numMembers || 29} members`}</Button>
        </h2>
        <p>{description}</p>
      </Container>
    </div>
  );
}

ClubBanner.defaultProps = {
  name: 'The Comic Book Club',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae ullam porro vel quam eligendi dignissimos sint fugiat a laudantium dolor, sed magni excepturi odio aliquam ad! Maiores, corrupti nostrum.',
  members: 29,
  image: default_splash,
  variant: 'light',
};

{
  /* <Card.Text>
	Next Meeting: {nextMeeting} {timezone}
</Card.Text>
<Card.Text>Last updated 3 mins ago</Card.Text> */
}

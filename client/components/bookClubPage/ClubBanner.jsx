import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';
import { AuthContext } from '../../context/authContext.jsx';
import { LoginModal } from '../global/loginRegisterModal.jsx';
import { AppContext } from '../../context/context.jsx';
import default_splash from '../../assets/images/bookclubs_sample/marvel_splash.svg';
export default function ClubBanner({}) {
  const user = useContext(AuthContext);
  const { selectedClubData } = useContext(AppContext);
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setData(selectedClubData);
  }, [selectedClubData]);

  const handleClose = () => setShow(false);

  const handleJoinClub = () => {
    if (!user) return setShow(true);
    axios
      .post(`/bookclub/join/${selectedClubData._id}`, { userId: user._id })
      .then(() => setData({ ...data, members: [...data.members, user._id] }));
  };

  const handleLeaveClub = () => {
    axios
      .post(`/bookclub/join/${selectedClubData._id}`, { userId: user._id })
      .then(() =>
        setData({ ...data, members: data.members.filter((member) => member !== user._id) })
      );
  };

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Please Log in to Join a Book Club!
          <LoginModal />
        </Modal.Body>
      </Modal>
      <Row>
        <Col>
          <Image src={data.thumbnail || ''} rounded fluid />
        </Col>
        <Col>
          <Row>
            <h1>
              {data.name || ''}{' '}
              <Button variant='outline-info' disabled>{`${
                data.members ? data.members.length : 0
              } members`}</Button>
              {user && data.members && data.members.includes(user._id) ? (
                <Button variant='secondary' onClick={handleLeaveClub}>
                  Leave
                </Button>
              ) : (
                <Button variant='primary' onClick={handleJoinClub}>
                  Join
                </Button>
              )}
            </h1>
          </Row>
          <Row>
            <p>{data.description || ''}</p>
          </Row>
        </Col>
      </Row>
    </Container>
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

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';
import { AuthContext } from '../../context/authContext.jsx';
import { LoginModal } from '../global/loginRegisterModal.jsx';
import { AppContext } from '../../context/context.jsx';
export default function ClubBanner({ main, variant }) {
  const user = useContext(AuthContext);
  const { club, joinClubById, leaveClubById } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleJoinClub = () => {
    if (!user) return setShow(true);
    joinClubById(club._id, user._id);
  };

  const handleLeaveClub = () => {
    leaveClubById(club._id, user._id);
  };

  return (
    <Container className='d-flex justify-content-between my-1'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Please Log in to Join a Book Club!
          <LoginModal />
        </Modal.Body>
      </Modal>
      <Row>
        <Col>
          {main ? (
            <Link to={`/clubs/detail/${club._id}`} style={{ maxWidth: '640px' }}>
              <Image src={club.thumbnail || ''} rounded fluid />
            </Link>
          ) : (
            <Image src={club.thumbnail || ''} rounded fluid />
          )}
        </Col>
        <Col>
          <Row>
            <div className='d-flex flex-grow-1'>
              <h2>
                <strong>{club.name || ''} </strong>
              </h2>
              <Button variant='outline-info' disabled className='ml-2'>{`${
                club.members ? club.members.length : 0
              } members`}</Button>
            </div>
          </Row>
          <Row>
            {user && club.members && club.members.includes(user._id) ? (
              <Button variant='secondary' onClick={handleLeaveClub}>
                Leave
              </Button>
            ) : (
              <Button variant='primary' onClick={handleJoinClub}>
                Join
              </Button>
            )}
            <p>{club.description || ''}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

ClubBanner.defaultProps = {
  variant: 'light',
  main: false
};

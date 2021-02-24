import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';
import { AuthContext } from '../../context/authContext.jsx';
import { LoginModal } from '../global/loginRegisterModal.jsx';
import { AppContext } from '../../context/context.jsx';
import imageType from './utils/imageType.js';
export default function ClubBanner({ main }) {
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
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Please Log in to Join a Book Club!
          <LoginModal />
        </Modal.Body>
      </Modal>
      <Row className='px-4 mx-4'>
        <Col className='pl-4 ml-4'>
          {main ? (
            <Link to={`/clubs/detail/${club._id}`}>
              <div
                className={imageType(club.thumbnail) === 'IMG' ? 'club-rounded' : 'rounded'}
                style={{
                  border: '1px solid #000',
                  maxHeight: '96%',
                  maxWidth: '95%',
                  overflow: 'hidden'
                }}
              >
                <Image src={club.thumbnail || ''} style={{ margin: '0 -10px 0 -10px' }} />
              </div>
            </Link>
          ) : (
            <div
              className={imageType(club.thumbnail) === 'IMG' ? 'club-rounded' : 'rounded'}
              style={{
                border: '1px solid #000',
                maxHeight: '96%',
                maxWidth: '88%',
                overflow: 'hidden'
              }}
            >
              <Image src={club.thumbnail || ''} style={{ margin: '0 -20px 0 -20px' }} />
            </div>
          )}
        </Col>
        <Col>
          <Row>
            <div className='d-flex'>
              <h2 className='mr-2'>
                <strong>{club.name || ''} </strong>
              </h2>
              <Button variant='outline-info' disabled className='ml-4'>{`${
                club.members ? club.members.length : 0
              } members`}</Button>
            </div>
          </Row>
          <Row>
            {user && club.members && club.members.includes(user._id) ? (
              <Button
                variant='secondary'
                onClick={handleLeaveClub}
                className='my-4'
                style={{ width: '20%', fontSize: '1.2rem' }}
              >
                Leave
              </Button>
            ) : (
              <Button
                variant='primary'
                onClick={handleJoinClub}
                className='my-3'
                style={{ width: '20%', fontSize: '1.2rem' }}
              >
                Join
              </Button>
            )}
            <p style={{ fontSize: '1.2rem' }}>{club.description || ''}</p>
          </Row>
        </Col>
      </Row>
    </>
  );
}

ClubBanner.defaultProps = {
  main: false
};

import React, { useState, useEffect } from 'react';
import {
  Modal,
  Image,
  Button,
  Table,
  Badge,
  Spinner,
  Row,
  Col
} from 'react-bootstrap';
import axios from 'axios';

export default function AllUsers({ handleClose, show, user }) {
  const addFriend = (newFriendId) => {
    axios.post('/user/friend', { userId: user._id, friendId: newFriendId });
  };
  const [allUsers, setAllUsers] = useState([]);

  useEffect(async () => {
    let usersList = await axios.get(`/user/all`);
    setAllUsers(usersList.data);
  }, []);

  return allUsers === undefined ? (
    <Spinner animation='border' role='status'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  ) : (
    <Modal
      size='lg'
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>All Users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            {allUsers.map((user) => {
              return (
                <Row className='m-3' key={user._id}>
                  <div className='thumbBody mx-3'>
                    <img className='thumbImage' src={user.photoUrl} />
                  </div>
                  <span>{user.username}</span>
                  <Button
                    className='mx-3'
                    variant='secondary'
                    onClick={() => {
                      addFriend(user._id);
                    }}
                  >
                    Add Friend
                  </Button>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

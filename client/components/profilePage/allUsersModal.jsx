import React, { useState, useEffect } from 'react';
import { Modal, Image, Button, Table, Badge, Spinner, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function AllUsers({
  handleClose,
  show,
}) {

  const [allUsers, setAllUsers] = useState([]);

  useEffect(async () => {
    let usersList = await axios.get(`http://localhost:3000/user/all`)
    setAllUsers(usersList.data);
  }, []);

  return allUsers === undefined ? (
    <Spinner animation='border' role='status'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  ) : (
    <Modal size='l' show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>All Users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            {allUsers.map((user) => {
              return (
              <div key={user._id}>
                <span className='thumbBody'><img className='thumbImage' src = {user.photoUrl}/></span>
                <span>{user.username}</span>
              </div>
              )
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

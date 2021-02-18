import React, { useState, useEffect } from 'react';
import { Modal, Image, Button, Table, Badge, Spinner, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function AllFriends({
  friendsList,
  handleClose,
  show,
}) {



  return friendsList === undefined ? (
    <Spinner animation='border' role='status'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  ) : (
    <Modal size='lg' show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>All Friends</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            {friendsList.map((friend) => {
              return (
              <Row className = 'm-3' key={friend._id}>
                <div className='thumbBody mx-3'>
                  <img className='thumbImage' src={friend.photoUrl}/>
                </div>
                <span>{friend.username}</span>
              </Row>)
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

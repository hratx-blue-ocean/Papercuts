import React from 'react';
import { Modal, Image, Button, Row, Col } from 'react-bootstrap';

//Props: id from Google books (number), show & owned & inLibrary (boolean), handleClose & handleAddToLibrary & handlePurchase functions
export default function BookModal({ book, show, setShow }) {
 
  return (
    <Modal size='lg' show={show} onHide={() => setShow(false)} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Image src={book.book_image} fluid rounded />
          </Col>
          <Col>
            <div>Author: {book.contributor}</div>
            <p>Description: {book.description}</p>
          <p>published by: {book.publisher}</p>
          <p>ISBN-10: {book.primary_isbn10} </p>
           <p>ISBN-13: {book.primary_isbn13}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => setShow(false)}>
          Close
        </Button>
        {/* <Button variant='primary' onClick={handlePurchase} disabled={owned}>
          {'Purchase'}
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

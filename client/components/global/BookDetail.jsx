import React, { useState, useContext, useEffect } from 'react';
import { Modal, Image, Button, Table, Badge, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import { AuthContext } from '../../context/authContext.jsx';
import Loader from './Loader.jsx';

//Props: id from Google books (number), show & owned (boolean), handleClose & handlePurchase functions
export default function BookDetail({ isbn = '082343978X', handleClose, show }) {
  const user = useContext(AuthContext);
  const { getBookDetails, book, purchaseBook } = useContext(AppContext);

  useEffect(() => {
    getBookDetails(isbn);
  }, [isbn]);
  console.log(book);
  return !book.volumeInfo ? (
    <Loader />
  ) : (
    <Modal size='lg' show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{book.volumeInfo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Image src={book.volumeInfo.imageLinks.thumbnail} fluid rounded />
          </Col>
          <Col>
            <div>by {book.volumeInfo.authors.join(', ')}</div>
            <br />
            <p>{book.volumeInfo.description}</p>
            <Table size='sm' striped bordered variant='light'>
              <tbody>
                <tr>
                  <td>Publisher</td>
                  <td colSpan='2'>{book.volumeInfo.publisher || ''}</td>
                </tr>
                <tr>
                  <td>Published Date</td>
                  <td colSpan='2'>{book.volumeInfo.publishedDate || ''}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td colSpan='2'>{book.volumeInfo.language || ''}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td colSpan='2'>{`$${
                    book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : ''
                  }`}</td>
                </tr>
                <tr>
                  <td>Tags</td>
                  <td colSpan='2'>
                    {book.volumeInfo.categories.map((category, idx) => (
                      <React.Fragment key={idx}>
                        <Badge pill variant='light'>
                          {category}
                        </Badge>{' '}
                      </React.Fragment>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={() => purchaseBook(user._id)}>
          {'Purchase'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

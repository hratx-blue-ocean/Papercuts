import React, { useState, useContext, useEffect } from 'react';
import { Modal, Image, Button, Table, Badge, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import { AuthContext } from '../../context/authContext.jsx';

let currentISBN;

//Accepts only a googleId, handleClose function and show boolean.
export default function BookDetail({ isbn, photo, show, setShow }) {
  const user = useContext(AuthContext);
  const { getBookDetails, purchaseBook } = useContext(AppContext);
  const [book, setBook] = useState({});
  const [purchased, setPurchased] = useState(false);

  useEffect(async () => {
    if (isbn && isbn !== currentISBN) {
      currentISBN = isbn;
      let data = await getBookDetails(isbn);
      if (data === 'NOT_FOUND') {
        setBook(null);
      } else {
        setBook(data);
      }
    }
  }, [isbn]);
  return !book ? (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        Oops! That info is currently missing. Please select another book.
      </Modal.Header>
    </Modal>
  ) : !book.volumeInfo ? (
    <></>
  ) : book.volumeInfo.title === 'Could not find book' ? (
    <Modal size='xl' show={show} onHide={() => setShow(false)} keyboard={false}>
      Could not find book
    </Modal>
  ) : (
    <Modal size='xl' show={show} onHide={() => setShow(false)} backdrop='static' keyboard={false}>
      <Modal.Header style={{ backgroundColor: 'var(--background-color)' }} closeButton>
        <Modal.Title>{book.volumeInfo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'var(--background-color)' }}>
        <Row>
          <Col md={!photo ? 'auto' : '4'}>
            <Image
              src={
                photo || book.volumeInfo.imageLinks.thumbnail || 'https://i.imgur.com/sJ3CT4V.gif'
              }
              fluid
              rounded
            />
          </Col>
          <Col md={!photo ? null : '8'}>
            <div>by {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</div>
            <br />
            <p
              style={{ maxHeight: '35vh', overflow: 'scroll' }}
              dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            ></p>
            <Table size='sm' striped bordered variant='light'>
              <tbody>
                <tr>
                  <td>Publisher</td>
                  <td colSpan='1'>{book.volumeInfo.publisher || 'Not Available'}</td>
                </tr>
                <tr>
                  <td>Published Date</td>
                  <td colSpan='1'>{book.volumeInfo.publishedDate || 'Not Available'}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td colSpan='1'>{book.volumeInfo.language || 'Not Available'}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td colSpan='1'>
                    {book.saleInfo.saleability === 'FOR_SALE'
                      ? `$${book.saleInfo.listPrice.amount}`
                      : 'Freely Available'}
                  </td>
                </tr>
                <tr>
                  <td>Tags</td>
                  <td colSpan='1'>
                    {book.volumeInfo.categories &&
                      book.volumeInfo.categories.map((category, idx) => (
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
        <Button variant='secondary' onClick={() => setShow(false)}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            purchaseBook(user._id, book);
            setPurchased(true);
          }}
          disabled={purchased}
        >
          {'Purchase'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

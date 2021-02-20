import React, { useState, useContext, useEffect } from 'react';
import { Modal, Image, Button, Table, Badge, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import { AuthContext } from '../../context/authContext.jsx';
import Loader from './Loader.jsx';

//Accepts only a googleId, handleClose function and show boolean.
export default function BookDetail({ isbn, show, setShow }) {
  const user = useContext(AuthContext);
  const { getBookDetails, purchaseBook } = useContext(AppContext);
  const [book, setBook] = useState({});
  const [purchased, setPurchased] = useState(false);

  useEffect(async () => {
    if (isbn) {
      let data = await getBookDetails(isbn);
      setBook(data);
    }
  }, [isbn]);

  return !book.volumeInfo ? (
    <Loader />
  ) : (
    <Modal size='xl' show={show} onHide={() => setShow(false)} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{book.volumeInfo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md='auto'>
            <Image
              src={
                book.volumeInfo.imageLinks.large ||
                book.volumeInfo.imageLinks.thumbnail ||
                'https://i.imgur.com/sJ3CT4V.gif'
              }
              fluid
              rounded
            />
          </Col>
          <Col>
            <div>by {book.volumeInfo.authors.join(', ')}</div>
            <br />
            <p dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}></p>
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
                  <td colSpan='1'>{`$${
                    book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 'Not for Sale'
                  }`}</td>
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

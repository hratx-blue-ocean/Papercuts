import React, { useState, useEffect } from 'react';
import { Modal, Image, Button, Table, Badge, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

//Props: id from Google books (number), show & owned (boolean), handleClose & handlePurchase functions
export default function BookDetail({ id = '0efCDwAAQBAJ', handleClose, show }) {
  const { getClubById } = useContext(AppContext);

  // const [data, setData] = useState({});

  //Temporary test constants
  // id = '0efCDwAAQBAJ';
  // owned = false;
  // handlePurchase = () => {};

  return (
    <Modal
      size='lg'
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Image src={book.imageURL} fluid rounded />
          </Col>
          <Col>
            <div>by {book.authors.join(', ')}</div>
            <p>{book.price}</p>
            <br />
            <br />
            <p>{book.description}</p>
            <Table size='sm' striped bordered variant='light'>
              <tbody>
                <tr>
                  <td>Publisher</td>
                  <td colSpan='2'>{data.volumeInfo.publisher}</td>
                </tr>
                <tr>
                  <td>Published Date</td>
                  <td colSpan='2'>{data.volumeInfo.publishedDate}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td colSpan='2'>{data.volumeInfo.language}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td colSpan='2'>{`$${data.saleInfo.retailPrice.amount}`}</td>
                </tr>
                <tr>
                  <td>Tags</td>
                  <td colSpan='2'>
                    {data.volumeInfo.categories.map((category, idx) => (
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
        <Button variant='primary' onClick={handlePurchase} disabled={owned}>
          {'Purchase'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

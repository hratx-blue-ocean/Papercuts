import React, { useContext } from 'react';
import { Container, Image, Button, Cards } from 'react-bootstrap';

const Bookofthemonth = () => {
  return (
    <Container className='cc-BOTM p-3'>
      <div>
        <Image
          src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328876361l/165846.jpg'
          fluid
          className='.cc-BOTM-img-container'
        />
      </div>
      <div className='cc-BOTM-mainBookInfo-container'>
        <div className='cc-BOTM-mainBookInfo-title-container'>
          <p className='cc-BOTM-mainBookInfo-bookTitle'>Book of the Month</p>
          <p className='cc-BOTM-mainBookInfo-header'>Snow Mountain Passage</p>
          <p className='cc-BOTM-mainBookInfo-author'>by James D. Houston</p>
        </div>
        <div>
          <p className='cc-BOTM-mainBookInfo-description'>
            A wagon train crosses the country to the promised land of California, only to be halted
            in the final stages by an early winter in the high reaches of the mountains. The
            emigrants endure the bitterest of winters with only the most slender of supplies.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Bookofthemonth;

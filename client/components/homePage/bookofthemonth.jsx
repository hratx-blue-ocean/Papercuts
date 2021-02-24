import React, { useContext } from 'react';
import { Container, Image, Button, Cards } from 'react-bootstrap';

const Bookofthemonth = () => {
  return (
<<<<<<< HEAD
    <Container className="cc-BOTM">
      <div >
        <Image
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328876361l/165846.jpg"
          fluid
          className=".cc-BOTM-img-container"/>
      </div>
      <div className="cc-BOTM-mainBookInfo-container">
        <div>
          <p className="cc-bigTitles">Book of the Month</p>
          <p className="cc-medTitles-centered">Snow Mountain Passage</p>
          <p className="cc-medTitles-italic">by James D. Houston</p>
        </div>
        <div className="cc-BOTM-mainBookInfo-priceCardsContainer">
          <div className="cc-BOTM-mainBookInfo-priceCards">
            <p>Hardcover:</p>
            <p>{`\n$${50}`}</p>
          </div>
          <div className="cc-BOTM-mainBookInfo-priceCards">
            <p>Paperback:</p>
            <p>{`\n$${50}`}</p>
          </div>
          <div className="cc-BOTM-mainBookInfo-priceCards">
            <p > Audio:</p>
            <p>{`\n$${50}`}</p>
          </div>
        </div>
        <br></br>
        <div >
          <p className="cc-homePage-smallText cc-align-bottom">A wagon train crosses the country to the promised land of California, only to be halted in the final stages by an early winter in the high reaches of the mountains. The emigrants endure the bitterest of winters with only the most slender of supplies.</p>
        </div>
      </div>
    </Container>
  )
}

export default Bookofthemonth;
=======
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
>>>>>>> 5c55553f4e6b99fe6171ccb94ddd6f4c87f9668f

import React, { useContext } from 'react';
import { Container, Image, Button, Cards } from 'react-bootstrap';
import dummyData from "./dummyData.js";

const Bookofthemonth = () => {
// OPTION 1: FLEX
  return (
    <Container className="cc-BOTM">
      <div >
        <Image src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328876361l/165846.jpg" fluid className=".cc-BOTM-img-container"/>
      </div>
      <div className="cc-BOTM-mainBookInfo-container">
        <div className="cc-BOTM-mainBookInfo-title-container">
          <p className="cc-BOTM-mainBookInfo-header">Book of the Month</p>
          <p className="cc-BOTM-mainBookInfo-bookTitle">Snow Mountain Passage</p>
          <p className="cc-BOTM-mainBookInfo-author">by James D. Houston</p>
        </div>
        <div className="cc-BOTM-mainBookInfo-priceCardsContainer">
          <div className="cc-BOTM-mainBookInfo-priceCards">
            <p>Hardcover:</p>
            <p>{`\n$${dummyData[3].priceHardcover}`}</p>
          </div>
          <div className="cc-BOTM-mainBookInfo-priceCards">
            <p>Paperback:</p>
            <p>{`\n$${dummyData[3].pricePaperback}`}</p>
          </div>
          <div className="cc-BOTM-mainBookInfo-priceCards">
            <p > Audio:</p>
            <p>{`\n$${dummyData[3].priceAudio}`}</p>
          </div>
        </div>
        <div >
          <p className="cc-BOTM-mainBookInfo-description">A wagon train crosses the country to the promised land of California, only to be halted in the final stages by an early winter in the high reaches of the mountains. The emigrants endure the bitterest of winters with only the most slender of supplies.</p>
        </div>
      </div>
    </Container>

  )

}

export default Bookofthemonth;
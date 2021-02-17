import React, { useContext } from 'react';
import { Container, Image, Button, Cards } from 'react-bootstrap';
import dummyData from "./dummyData.js";

const BOTM = () => {
// OPTION 1: FLEX
  return (
    <Container className="cc-BOTM">
      <div >
        <Image src={dummyData[3].imageURL} fluid className=".cc-BOTM-img-container"/>
      </div>
      <div className="cc-BOTM-mainBookInfo-container">
        <div className="cc-BOTM-mainBookInfo-title-container">
          <p className="cc-BOTM-mainBookInfo-header">Book of the Month</p>
          <p className="cc-BOTM-mainBookInfo-bookTitle">{dummyData[3].title}</p>
          <p className="cc-BOTM-mainBookInfo-author">by {dummyData[3].author}</p>
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
          <p className="cc-BOTM-mainBookInfo-description">{dummyData[3].description}</p>
        </div>
      </div>
    </Container>

  )

}

export default BOTM;
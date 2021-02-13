import React, { useContext } from 'react';
import { Container, Image, Button, Cards } from 'react-bootstrap';
import dummyData from "./dummyData.js";

const BOTM = () => {

  return (
    // top level container: row with 2 children:
    <div className="cc-BOTM">
      {/* top level child 1: book image: */}
      <Container className="cc-BOTM-img-container">
        <Image src={dummyData[0].imageURL} fluid/>
      </Container>
      <Container className="cc-BOTM-mainBookInfo-container">
      {/* top level child 2: Title/author section, price cards, summary text: (col) */}
        <Container className="cc-BOTM-mainBookInfo-title-container">
          <p className="cc-BOTM-mainBookInfo-header">Book of the Month</p>
          <p className="cc-BOTM-mainBookInfo-bookTitle">{dummyData[0].title}</p>
          <p className="cc-BOTM-mainBookInfo-author">{dummyData[0].author}</p>
        </Container>
        <Container className="cc-BOTM-mainBookInfo-priceCardsContainer">
          <div>
            <p>Hardcover:</p>
            <p>{`$${dummyData[0].priceHardcover}`}</p>
          </div>
          <div>
            <p>Paperback:</p>
            <p>{`$${dummyData[0].pricePaperback}`}</p>
          </div>
          <div>
            <p>Audio:</p>
            <p>{`$${dummyData[0].priceAudio}`}</p>
          </div>
        </Container>
        <div className="cc-BOTM-mainBookInfo-bookDescr">
          <p className="cc-text">{dummyData[0].description}</p>
        </div>
      </Container>
    </div>
  )

}

export default BOTM;
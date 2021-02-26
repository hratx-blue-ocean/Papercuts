import React, { useContext } from 'react';
import { Container, Image, Button, Cards } from 'react-bootstrap';

const Bookofthemonth = () => {
  return (
    <Container className='cc-BOTM p-3' style={{width: '100vw'}}>
      <div>
        <Image
          src='https://juliaquinn.com/WP/wp-content/uploads/2020/11/Bridgerton_TVTie-In_TRADE.jpg'
          fluid
          style={{width: '280px', height:'auto'}}
          className='.cc-BOTM-img-container'
        />
      </div>
      <div className='cc-BOTM-mainBookInfo-container'>
        <div className='cc-BOTM-mainBookInfo-title-container'>
          <p className='cc-BOTM-mainBookInfo-bookTitle'>Book of the Month</p>
          <p className='cc-BOTM-mainBookInfo-header'>Bridgerton: the Duke and I</p>
          <p className='cc-BOTM-mainBookInfo-author'>by Julia Quinn</p>
        </div>
        <div>
          <p className='cc-BOTM-mainBookInfo-description'>
          In the ballrooms and drawing rooms of Regency London, rules abound. From their earliest days, children of aristocrats learn how to address an earl and curtsey before a prince--while other dictates of the ton are unspoken yet universally understood.
           A proper duke should be imperious and aloof. A young, marriageable lady should be amiable...but not too amiable.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Bookofthemonth;

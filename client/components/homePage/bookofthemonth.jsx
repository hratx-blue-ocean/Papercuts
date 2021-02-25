import React, { useContext } from 'react';
import { Container, Image, Button, Cards } from 'react-bootstrap';

const Bookofthemonth = () => {
  return (
    <Container className='cc-BOTM p-3'>
      <div>
        <Image
          src='https://juliaquinn.com/WP/wp-content/uploads/2020/11/Bridgerton_TVTie-In_TRADE.jpg'
          fluid
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
          In the ballrooms and drawing rooms of Regency London, rules abound. From their earliest days, children of aristocrats learn how to address an earl and curtsey before a prince--while other dictates of the ton are unspoken yet universally understood. A proper duke should be imperious and aloof. A young, marriageable lady should be amiable...but not too amiable.

          Daphne Bridgerton has always failed at the latter. The fourth of eight siblings in her close-knit family, she has formed friendships with the most eligible young men in London. Everyone likes Daphne for her kindness and wit. But no one truly desires her. She is simply too deuced honest for that, too unwilling to play the romantic games that captivate gentlemen.

          Amiability is not a characteristic shared by Simon Basset, Duke of Hastings. Recently returned to England from abroad, he intends to shun both marriage and society--just as his callous father shunned Simon throughout his painful childhood. Yet an encounter with his best friend's sister offers another option. If Daphne agrees to a fake courtship, Simon can deter the mamas who parade their daughters before him. Daphne, meanwhile, will see her prospects and her reputation soar.

          The plan works like a charm--at first. But amid the glittering, gossipy, cut-throat world of London's elite, there is only one certainty: love ignores every rule...
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Bookofthemonth;

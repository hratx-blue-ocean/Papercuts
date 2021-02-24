import React, { useEffect, useContext } from 'react';
import Bookofthemonth from './bookofthemonth.jsx';
import Books from './books.jsx';
import SiteDesc from './SiteDesc.jsx';
import MonthlySubscr from './MonthlySubscr.jsx';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
<<<<<<< HEAD
    <div>
      <Container className="cc-homePage-topLevelContainer">
        <div className="cc-homePage-leftMainCol">
          <Bookofthemonth />

        </div>
        <div className="cc-homePage-rightMainCol">
          <SiteDesc />
          <MonthlySubscr />
        </div>
      </Container>
      <Books />
      <br />
    </div>

  )
}
=======
    <Container className='p-1 m-1'>
      <Container>
        <Bookofthemonth />
        <Books />
        <br />
      </Container>
    </Container>
  );
};
>>>>>>> 5c55553f4e6b99fe6171ccb94ddd6f4c87f9668f

export default HomePage;

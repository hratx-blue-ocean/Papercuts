import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const HomePage = (props) => {
  /// stuff I need from context gets listed like this:
  /* const { stuff ] = useContext(WhichOneFromContext)} */

  /// get book of the month:
    // image, title, author, prices for HC, PB, AB, description

  /// get trending books:
    // thumbnail image, title, author, price, description?

  /// get genres
    // thumbnail image, title, author, price, description? (seems like a lot for these hovers...)

  return (
    // navbar:
    <Container fluid="md">
      {/* <Navbar/> */} <Button>BEHOLD, I AM A BUTTON</Button>
    </Container>
    // container:
    //   left: Botm, trending caro, genre caro;
    //   right: site desc, login/signup, monthly subscr;
    // footer
  )

}

export default HomePage;
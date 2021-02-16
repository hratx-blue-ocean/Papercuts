import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'react-bootstrap';

export default function Error() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>404: Page Not Found</h1>
        <p>Uh-oh! Looks like this doesn't exist... yet!</p>
        <Button to='/' as={Link} action variant='primary'>
          Back to Home
        </Button>
      </Container>
    </Jumbotron>
  );
}

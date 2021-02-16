import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container, Alert } from 'react-bootstrap';

export default function Error({ variant }) {
  return (
    <Jumbotron fluid>
      <Alert variant={variant}>
        <h1 className='text-danger font-weight-bold'>404: Page Not Found</h1>
        <p className='text-info font-weight-light'>Uh-oh! Looks like this doesn't exist... yet!</p>
        <Button to='/' as={Link} action variant='primary'>
          Back to Home
        </Button>
      </Alert>
    </Jumbotron>
  );
}

Error.defaultProps = {
  variant: 'info',
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Alert } from 'react-bootstrap';

export default function Error({ variant }) {
  return (
    <Jumbotron fluid variant={variant}>
      <Alert variant={variant}>
        <h1 className='text-danger font-weight-bold'>404: Page Not Found</h1>
        <p className='py-1 my-1'>
          Uh-oh! Looks like this doesn't exist... yet!
        </p>
        <Button to='/' as={Link} action variant='dark'>
          Back to Home
        </Button>
      </Alert>
    </Jumbotron>
  );
}

Error.defaultProps = {
  variant: 'warning'
};

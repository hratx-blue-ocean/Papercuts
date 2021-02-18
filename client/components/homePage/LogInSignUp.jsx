import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LogInSignUp = (props) => {

  return (
    <div>
      <p> </p>
      <p> </p>
      <h3 className="cc-homePage-rightMainCol-titles">
        Login / Sign Up
      </h3>
      <p> </p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email"
            placeholder="Email address" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password"
            placeholder="Password" />
        </Form.Group>
        <Button
          className="cc-LogIngSignUp-Button"
          variant="dark"
          block>
          NEXT
        </Button>
      </Form>
      <p> </p>
    </div>
  )

}

export default LogInSignUp;
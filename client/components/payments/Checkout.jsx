import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Button, Card, Image } from 'react-bootstrap';
import axios from 'axios';

export default function Checkout() {
  // Create an instance of the Stripe object with your publishable API key
  const stripe = Stripe(
    'pk_test_51IHxGGEZ5KuRE6lkaPBuzzJO43X3YKlQyIHQUfZMteM0nmWG6F16S5cQ5mIb5X3g6MzrQl9NiPZ7Nzc3gUel5bme00ax86S3zT'
  );
  const handleCheckout = function () {
    axios
      .post('/checkout')
      .then((response) => response.data)
      .then((session) => stripe.redirectToCheckout({ sessionId: session.id }))
      .then(function (result) {
        if (result.error) {
          alert(result.error.message);
        }
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Route exact path='/checkout'>
        <Card>
          <Image
            src='https://i.imgur.com/EHyR2nP.png'
            height='200'
            alt='The cover of Stubborn Attachments'
          />
          <Card.Body>
            <h3>Stubborn Attachments</h3>
            <h5>$20.00</h5>
          </Card.Body>
        </Card>
        <Button onClick={handleCheckout}>Checkout</Button>
      </Route>
      <Route path='/checkout/success'>
        <p>We appreciate your business! If you have any questions, please email</p>
        <a href='mailto:orders@example.com'>orders@example.com</a>.
      </Route>
      <Route path='/checkout/cancel'>
        <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
      </Route>
    </>
  );
}

import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import SubscriptionCard from './SubscriptionCard.jsx';
import specifications from './Specifications.js';
import { AuthContext } from '../../context/authContext.jsx';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function Subscriptions() {
  const user = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (idx) => {
    if (!user.payment) {
      setError('Please add payment method first in setting page');
    } else {
      axios
        .post('/user/subscription', {
          userId: user._id,
          name: specifications[idx].name,
          description: specifications[idx].description,
          voucher: idx === 0 ? 1 : idx === 1 ? 3 : 5
        })
        .then(() => {
          setRedirect(true);
        })
        .catch(() => console.log('OPPS'));
    }
  };

  return redirect ? (
    <Redirect to='/setting' />
  ) : (
    <Container>
      {error && (
        <Alert variant='danger' onClose={() => setError('')} dismissible>
          {error}
        </Alert>
      )}
      <h1>Subscription &amp; Pricing Options</h1>

      <Row>
        {specifications.map((spec, i) => (
          <SubscriptionCard
            key={spec.id}
            spec={spec}
            handleSubscribe={() => handleSubscribe(i)}
          />
        ))}
      </Row>
    </Container>
  );
}

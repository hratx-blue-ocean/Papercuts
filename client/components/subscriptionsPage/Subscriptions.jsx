import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import SubscriptionCard from './SubscriptionCard.jsx';
import specifications from './Specifications.js';

export default function Subscriptions() {
  //Need a handlesubscribe function
  const handleSubscribe = () => {};
  return (
    <Container className='py-4 my-5'>
      <h1>Subscription &amp; Pricing Options</h1>
      <Row>
        {specifications.map((spec) => (
          <SubscriptionCard key={spec.id} spec={spec} handleSubscribe={handleSubscribe} />
        ))}
      </Row>
    </Container>
  );
}

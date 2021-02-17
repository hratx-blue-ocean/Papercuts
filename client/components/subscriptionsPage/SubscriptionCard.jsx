import React from 'react';
import { Col, Card, Badge, Button } from 'react-bootstrap';

export default function SubscriptionCard({ spec, handleSubscribe }) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <div>
            {spec.badges.map((badge, idx) => (
              <Badge key={idx}>{badge}</Badge>
            ))}
          </div>
          <br />
          <h2>{spec.name}</h2>
          <br />
          <p>{spec.description}</p>
          <hr />
          {spec.features.map((feature, idx) => (
            <div key={idx}>&#10003; {feature}</div>
          ))}
          <br />
          <Button variant="dark" onClick={handleSubscribe}>
            Subscribe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

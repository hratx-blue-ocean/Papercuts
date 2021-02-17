import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function FriendRecommendations({user}) {


  return (

    <div>
      <Row>
        <Col>
        <p>What friends are recommending</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="recommendation-cards">
            <p>Yo! This Dr. Seuss Book is quite the masterpiece! Never knew I was so gifted in selecting books!</p>
            <p>Jerrick Ravelo</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="recommendation-cards">
            <p>Jason Fleming recommends...</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
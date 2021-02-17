import React from 'React';
import { Card, Col, Row } from 'react-bootstrap';

export default function FriendRecommendations() {
  return (
    <div>
      <Row>
        <Col>
        <p>What friend's are recommending</p>
        </Col>
      </Row>
      <Col className="friend-recommendations">
        <Row>
          {/* <Col className="friend-recommendations"> */}
            <Card className="recommendation-cards">
              <p>Yo! This Dr. Seuss Book is quite the masterpiece! Never knew I was so gifted in selecting books!</p>
              <p>Jerrick Ravelo</p>
            </Card>
          {/* </Col> */}
        </Row>
      </Col>
      <Row>
        <Col className="friend-recommendations">
          <Card className="recommendation-cards">
            <p>Jason Fleming recommends...</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>What friend's are recommending</p>
        </Col>
      </Row>
    </div>
  )
}
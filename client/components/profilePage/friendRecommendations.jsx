import React from 'React';
import { Card, Col, Row } from 'react-bootstrap';

export default function FriendRecommendations() {
  return (
    <div>
      <Col className="friend-recommendations">
        <Row>
          {/* <Col className="friend-recommendations"> */}
            <Card className="recommendation-cards">
              <p>Yo! This Patrick Mahomes book is sick! F@$* Thomas Edward Patrick Brady, Jr.! I mean, who needs that many names anyway?!</p>
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
    </div>
  )
}
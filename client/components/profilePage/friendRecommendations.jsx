import React, { useEffect } from 'react';
import { Card, Col, Row, Accordion, Button } from 'react-bootstrap';

export default function FriendRecommendations({ friendsList }) {
  const reviewList = friendsList;

  return (
    <div>
      <Row>
        <div
          style={{ fontSize: '23px' }}
          className='userClubsHeader font-weight-bold'
        >
          Friends recommendations
        </div>
      </Row>

      <Accordion defaultActiveKey='0'>
        {reviewList.length > 0 &&
          reviewList.map((friend, i) => {
            return (
              <Card key={friend._id}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey={i + 1}>
                    {friend.username} recommends...
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={i + 1}>
                  <Card.Body>
                    {friend.recommendation.summary} <br />
                    {friend.recommendation.description}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
      </Accordion>
    </div>
  );
}

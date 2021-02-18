import React, {useEffect} from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function FriendRecommendations({friendsList}) {
  const reviewList = friendsList;

  return (

    <div>
      <Row>
        <Col>
        <p>What friends are recommending</p>
        </Col>
      </Row>
      {reviewList.length > 0 &&
      reviewList.slice(0,3).map((friend) =>{
        return (
          <Row key={friend._id}>
            <Col>
              <Card className="recommendation-cards">
                <p>{friend.username} recommends...</p>
                <p>{friend.recommendation.summary}</p>
                <p>{friend.recommendation.description}}</p>
              </Card>
            </Col>
          </Row>
        )
      })
      }
    </div>
  )
}
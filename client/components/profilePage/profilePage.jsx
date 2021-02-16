import React, {useState, useEffect } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import MyLibrary from './myLibrary.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import RecommendedBookClubs from './recommendedBookClubs.jsx';
import FriendRecommendations from './friendRecommendations.jsx';

export default function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MyLibrary />
          </Col>
          <Col>
            <Row>
              <div>Friends Area</div>
            </Row>
            <Row className="friend-recommendations">
              <FriendRecommendations />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <RecommendedBooks />
          </Col>
          <Col>
            <RecommendedBookClubs />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Schedule from './Schedule.jsx';
import Comments from './Comments.jsx';
import Questionnaire from './Questionnaire.jsx';
import ClubBanner from './ClubBanner.jsx';

export default function BookClub() {
  return (
    <Container className='my-3'>
      <Row className='my-2'>
        <Col>
          <ClubBanner />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey='schedule' id='club-tabs'>
            <Tab eventKey='schedule' title='Schedule'>
              <Schedule />
            </Tab>
            <Tab eventKey='comments' title='Comments'>
              <Comments />
            </Tab>
            <Tab eventKey='questionnaire' title='Questionnaire'>
              <Questionnaire />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Schedule from './Schedule.jsx';
import Comments from './Comments.jsx';
import Questionnaire from './Questionnaire.jsx';
import ClubBanner from './ClubBanner.jsx';
import { AppContext } from '../../context/context.jsx';

export default function BookClub() {
  let { id } = useParams();
  const { getClubById } = useContext(AppContext);

  useEffect(() => {
    getClubById(id);
  }, []);

  return (
    <Container>
      <Row>
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

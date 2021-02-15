import React, { useContext } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import Schedule from './Schedule.jsx';
import Comments from './Comments.jsx';
import Questionnaire from './Questionnaire.jsx';
import exampleClubs from './exampleData.js';
import ClubBanner from './ClubBanner.jsx';

export default function BookClub() {
  // const {exampleClubs} = useContext(AppContext);
  const data = exampleClubs[0];

  const func = () => {};

  return (
    <Container>
      <Row>
        <Col>
          <ClubBanner name={data.name} description={data.description} members={data.members} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey='schedule' id='club-tabs'>
            <Tab eventKey='schedule' title='Schedule'>
              <Schedule events={data.events} />
            </Tab>
            <Tab eventKey='comments' title='Comments'>
              <Comments comments={data.comments} />
            </Tab>
            <Tab eventKey='questionnaire' title='Questionnaire'>
              <Questionnaire questionnaire={data.questionnaire} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

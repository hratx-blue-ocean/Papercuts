import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../context/authContext.jsx';
import { AppContext } from '../../context/context.jsx';
import test from './test.jpg';

export default function ClubBanner({}) {
  const user = useContext(AuthContext);
  const { selectedClubData } = useContext(AppContext);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(selectedClubData);
  }, [selectedClubData]);

  const handleJoinClub = () => {
    axios
      .post(`/bookclub/join/${selectedClubData._id}`, { userId: user._id })
      .then(() => setData({ ...data, members: [...data.members, user._id] }));
  };

  const handleLeaveClub = () => {
    axios
      .post(`/bookclub/join/${selectedClubData._id}`, { userId: user._id })
      .then(() =>
        setData({ ...data, members: data.members.filter((member) => member !== user._id) })
      );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Image src={data.thumbnail || ''} rounded fluid />
        </Col>
        <Col>
          <Row>
            <h1>
              {data.name || ''}{' '}
              <Button variant='outline-info' disabled>{`${
                data.members ? data.members.length : 0
              } members`}</Button>
              {user &&
                data.members &&
                (data.members.includes(user._id) ? (
                  <Button variant='secondary' onClick={handleLeaveClub}>
                    Leave
                  </Button>
                ) : (
                  <Button variant='primary' onClick={handleJoinClub}>
                    Join
                  </Button>
                ))}
            </h1>
          </Row>
          <Row>
            <p>{data.description || ''}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

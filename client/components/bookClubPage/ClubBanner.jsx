import React from 'react'
import {Container, Row, Col, Button, Image} from 'react-bootstrap'

export default function ClubBanner({name, description, members}) {
  const numMembers = members.length;

  return (
    <Container>
      <Row>
        <Col>
          <Image src="./test.jpg" rounded fluid />
        </Col>
        <Col>
          <Row>
            <h1>{name} <Button variant="outline-info" disabled >{`${numMembers} members`}</Button></h1>
          </Row>
          <Row>
            <p>{description}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

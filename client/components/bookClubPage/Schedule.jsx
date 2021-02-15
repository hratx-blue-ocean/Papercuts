import React from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import Event from './Event.jsx';

export default function Schedule({ events }) {
  return (
    <div>
      <ListGroup>
        {events.map((event, idx) => (
          <ListGroup.Item key={idx}>
            <Event event={event} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

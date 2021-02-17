import React, { useContext, useState, useEffect } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Event from './Event.jsx';
import { AuthContext } from '../../context/authContext.jsx';
import { AppContext } from '../../context/context.jsx';

export default function Schedule({}) {
  const user = useContext(AuthContext);
  const { club } = useContext(AppContext);
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!club._id) return;
    axios.get(`/bookclub/event/${club._id}`).then((res) => {
      setEvents(res.data);
    });
  }, [club]);

  const handleAddEvent = () => {
    axios
      .post(`/bookclub/event/${club._id}`, formData)
      .then(() => axios.get(`/bookclub/event/${club._id}`))
      .then((res) => {
        setEvents(res.data);
      });
  };

  return (
    <div>
      <ListGroup>
        {events.map((event, idx) => (
          <ListGroup.Item key={idx}>
            <Event event={event} />
          </ListGroup.Item>
        ))}
        {user && club.owner && user._id === club.owner._id && (
          <ListGroup.Item>
            <Form>
              <h5>{`Add an Event - logged in as owner: ${user.email}`}</h5>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type='input'
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type='text'
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <Form.Label>Schedule</Form.Label>
              <Form.Control
                required
                type='datetime-local'
                onChange={(e) =>
                  setFormData({ ...formData, schedule: e.target.value })
                }
              />
              <Form.Label>Link</Form.Label>
              <Form.Control
                type='url'
                onChange={(e) =>
                  setFormData({ ...formData, zoom_link: e.target.value })
                }
              />
              <Button onClick={handleAddEvent}>Add</Button>
            </Form>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

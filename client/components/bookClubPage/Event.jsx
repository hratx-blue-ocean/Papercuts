import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function Event({ event }) {
  const [checked, setChecked] = useState(event.checked);
  return (
    <>
      <h3>{event.name}</h3>
      <span>{`${event.description} at ${Date(event.schedule).toString()}`}</span>
      <a href={event.zoom_link}>Meeting Link</a>
    </>
  );
}

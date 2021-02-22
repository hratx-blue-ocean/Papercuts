import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function Event({ event }) {
  const [checked, setChecked] = useState(event.checked);
  return (
    <>
      <h4>{event.name}</h4>
      <p>{event.description}</p>
      <small>
        {`At ${new Date(event.schedule).toLocaleString()} - `}
        <a href={event.zoom_link.includes('//') ? event.zoom_link : 'https://' + event.zoom_link}>
          Meeting Link
        </a>
      </small>
    </>
  );
}

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function Event({ event }) {
  const [checked, setChecked] = useState(event.checked);

  return (
    <>
      <h3>{event.name}</h3>
      {event.checkbox && (
        <Form.Check
          inline
          type='checkbox'
          label='Done'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      )}
      <span>{event.description}</span>
      <span>{new Date(event.dateTime).toString()}</span>
    </>
  );
}

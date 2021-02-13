import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function Questionnaire({questionnaire}) {


  return (
    <Form>
      {questionnaire.map((question, idx) => (
        <Form.Group key={idx} controlId={`question-${idx}`}>
          <Form.Label>{question.question}</Form.Label>
          <Form.Control type={question.type} />
        </Form.Group>
      ))}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

import React from 'react';
import { Form, ListGroup, Button } from 'react-bootstrap';

export default function Comments({ comments }) {
  return (
    <div>
      <ListGroup>
        {comments.map((comment, idx) => (
          <ListGroup.Item key={idx}>
            <p>{comment.text}</p>
            <p>
              {comment.username} at <span>{new Date(comment.timeSubmitted).toString()}</span>
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form>
        <Form.Group controlId="addComment">
          <Form.Label>Add a Comment</Form.Label>
          <Form.Control type="textarea" placeholder="What are you thinking?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

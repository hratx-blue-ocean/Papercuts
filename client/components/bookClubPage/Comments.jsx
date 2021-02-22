import React, { useContext, useState, useEffect } from 'react';
import { Form, ListGroup, Nav, Button, Alert } from 'react-bootstrap';
import { AuthContext } from '../../context/authContext.jsx';
import { AppContext } from '../../context/context.jsx';
import { LoginModal } from '../global/loginRegisterModal.jsx';
import axios from 'axios';

export default function Comments({}) {
  const user = useContext(AuthContext);
  const { club } = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (!club._id) return;
    axios.get(`/bookclub/comment/${club._id}`).then((res) => {
      setComments(res.data);
    });
  }, [club]);

  const handleAddComment = () => {
    axios
      .post(`/bookclub/comment/${club._id}`, {
        //This should be changed to username once we start using usernames
        username: user.email,
        body: formData
      })
      .then(() => axios.get(`/bookclub/comment/${club._id}`))
      .then((res) => {
        setComments(res.data);
      });
  };

  const handleLike = (e) => {
    let newComments = [...comments];
    newComments.find((comment) => comment._id === e.target.id).likes++;
    setComments(newComments);
    axios.put(`/bookclub/comment/like/${e.target.id}`);
  };

  const handleDislike = (e) => {
    let newComments = [...comments];
    newComments.find((comment) => comment._id === e.target.id).dislikes++;
    setComments(newComments);
    axios.put(`/bookclub/comment/dislike/${e.target.id}`);
  };

  return (
    <div>
      <ListGroup>
        {comments.map((comment, idx) => (
          <ListGroup.Item className='my-1' key={idx}>
            <p>{comment.body}</p>
            <small>
              {comment.username} at{' '}
              <span>{`${new Date(comment.created_at).toLocaleString()} - `} </span>
              <Nav.Link
                id={comment._id}
                style={{ display: 'inline-block', padding: '0' }}
                onClick={handleLike}
              >
                {`${comment.likes} likes`}
              </Nav.Link>
              {` | `}
              <Nav.Link
                id={comment._id}
                style={{ display: 'inline-block', padding: '0' }}
                onClick={handleDislike}
              >
                {`${comment.dislikes} dislikes`}
              </Nav.Link>
            </small>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {user ? (
        <Form className='my-2'>
          <Form.Group controlId='addComment'>
            <Form.Label>Add a Comment</Form.Label>
            <Form.Control
              type='textarea'
              placeholder='What are you thinking?'
              onChange={(e) => setFormData(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' onClick={handleAddComment}>
            Submit
          </Button>
        </Form>
      ) : (
        <Alert variant='info'>
          <Alert.Heading>Please log in to comment</Alert.Heading>
          <LoginModal />
        </Alert>
      )}
    </div>
  );
}

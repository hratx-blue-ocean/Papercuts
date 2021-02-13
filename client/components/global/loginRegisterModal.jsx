import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [err, setErr] = useState(null);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              sendLogin(email, password, handleClose, setErr);
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {err ? (
              <span style={{ fontSize: '14px', color: 'red' }}>
                {err}
                <br></br>
              </span>
            ) : null}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const RegisterModal = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [noMatch, setNoMatch] = useState(false);
  const [err, setErr] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              sendRegister(email, password, handleClose, setErr);
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {noMatch && (
              <span style={{ fontSize: '14px', color: 'red' }}>Passwords do not match</span>
            )}
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  e.target.value !== password ? setNoMatch(true) : setNoMatch(false);
                }}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {err ? (
              <span style={{ fontSize: '14px', color: 'red' }}>
                {err}
                <br></br>
              </span>
            ) : null}
            <Button disabled={noMatch} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const sendLogin = (email, password, handleClose, setErr) => {
  axios
    .post(`http://localhost:3000/api/auth/login?email=${email}&password=${password}`, null, {
      withCredentials: true,
    })
    .then(() => {
      handleClose();
      window.location.reload(false);
    })
    .catch((err) => {
      setErr(err.response.data.message);
    });
};

const sendRegister = (email, password, handleClose, setErr) => {
  axios
    .post(`http://localhost:3000/api/auth/register?email=${email}&password=${password}`, null, {
      withCredentials: true,
    })
    .then(() => {
      handleClose();
      window.location.reload(false);
    })
    .catch((err) => {
      setErr(err.response.data);
    });
};

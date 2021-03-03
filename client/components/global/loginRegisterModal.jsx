import React, { useState } from 'react';
import { Modal, Button, Form, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
  const [forgot, setForgot] = useState(false);
  const [title, setTitle] = useState('Login');
  const [response, setResponse] = useState(null);
  const handleClose = () => {
    setForgot(false);
    setTitle('Login');
    setShow(false);
    setResponse(null);
  };
  const handleShow = () => {
    setForgot(false);
    setTitle('Login');
    setShow(true);
  };

  return (
    <>
      <Nav.Link onClick={handleShow} variant='dark'>
        Login
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {forgot ? (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                sendEmail(email, setResponse, handleClose);
              }}
            >
              <Form.Group controlId='formBasicEmail'>
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type='email'
                  placeholder='Enter email'
                  required
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {response ? (
                <span style={{ fontSize: '14px', color: 'green' }}>
                  {response}, closing...
                  <br></br>
                </span>
              ) : null}
              <Button variant='primary' type='submit'>
                Send Reset Link
              </Button>
            </Form>
          ) : (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                sendLogin(email, password, handleClose, setErr);
              }}
            >
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type='email'
                  placeholder='Enter email'
                  required
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type='password'
                  placeholder='Password'
                  required
                />
              </Form.Group>
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setTitle('Reset Password');
                  setForgot(true);
                }}
              >
                Forgot Password? Click here.
              </a>
              <br></br>
              {err ? (
                <span style={{ fontSize: '14px', color: 'red' }}>
                  {err}
                  <br></br>
                </span>
              ) : null}
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
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
      <Nav.Link onClick={handleShow} variant='dark'>
        Register
      </Nav.Link>

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
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type='email'
                placeholder='Enter email'
                required
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type='password'
                placeholder='Password'
                required
              />
            </Form.Group>
            {noMatch && (
              <span style={{ fontSize: '14px', color: 'red' }}>Passwords do not match</span>
            )}
            <Form.Group controlId='formBasicConfirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  e.target.value !== password ? setNoMatch(true) : setNoMatch(false);
                }}
                type='password'
                placeholder='Password'
                required
              />
            </Form.Group>
            {err ? (
              <span style={{ fontSize: '14px', color: 'red' }}>
                {err}
                <br></br>
              </span>
            ) : null}
            <Button disabled={noMatch} variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const sendLogin = (email, password, handleClose, setErr, cb) => {
  return axios
    .post(
      `/api/auth/login`,
      { email, password },
      {
        withCredentials: true
      }
    )
    .then(() => {
      handleClose();
      window.location.href = '/profile';
    })
    .catch((err) => {
      setErr(err.response.data.message);
    });
};

const sendRegister = (email, password, handleClose, setErr) => {
  axios
    .post(
      `/api/auth/register`,
      { email, password },
      {
        withCredentials: true
      }
    )
    .then(() => {
      handleClose();
      window.location.href = '/profile';
    })
    .catch((err) => {
      setErr(err.response.data);
    });
};

const sendEmail = (email, setResponse, handleClose) => {
  axios
    .get(`/reset/email/${email}`)
    .then((response) => {
      setResponse(response.data);
      setTimeout(() => {
        handleClose();
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { BrightnessHighFill } from 'react-bootstrap-icons';

import logo from '../../../../Docs/readMeImage/logo.png';
import styles from './Header.module.css';

export const HeaderComp = ({ user }) => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className='container'>
        <Navbar expand='lg'>
          <Navbar.Brand to='/' as={Link}>
            <img className={styles.logo} alt='logoImg' src={logo} width={`200`} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto justify-content-center'>
              <Link className={styles.navText} to='/clubs'>
                Bookclubs
              </Link>

              <Link className={styles.navText} to='/subscriptions'>
                Subscriptions
              </Link>

              {user && (
                <Link className={styles.navText} to='/profile'>
                  Profile
                </Link>
              )}
            </Nav>
            <div className={styles.themeSwitcherBtn} onClick={switchTheme}>
              <BrightnessHighFill />
            </div>
            <Button variant='outline-success'>Logout</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

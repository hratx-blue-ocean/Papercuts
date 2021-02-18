import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React, { useState, useRef, useContext } from 'react';
import { firebaseStorage } from '../../../Docs/firebase-config/firebase';

import './setting.css';

export const SettingPage = ({ user }) => {
  const [curTab, setCurTab] = useState('profile');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [usrEmail, setUsrEmail] = useState('');
  const [usrName, setUsrName] = useState('');
  const [usrOldPwd, setUsrOldPwd] = useState('');
  const [usrNewPwd, setUsrNewPwd] = useState('');
  const [ccNum, setCcNum] = useState(null);
  const [ccHolder, setCcHolder] = useState(null);
  const [ccDate, setCcDate] = useState(null);
  const [ccCVC, setCcCVC] = useState(null);

  const fileRef = useRef();

  const newImg = () => {
    document.getElementById('hiddenImg').click();
  };

  const sendImg = () => {
    const storageRef = firebaseStorage.ref(fileRef.current.files[0].name);
    storageRef
      .put(fileRef.current.files[0])
      .then((snap) => {
        return snap.ref.getDownloadURL();
      })
      .then((url) => {
        document.getElementById('profilePic').src = url;
        return axios.put('/user/info', {
          userId: user._id,
          photoUrl: url
        });
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    setMsg('');

    try {
      if (!usrOldPwd) {
        await axios.put('/user/info', {
          userId: user._id,
          username: usrName || undefined,
          email: usrEmail || undefined
        });
        setMsg('Data updated');
      } else {
        axios
          .put('/user/info', {
            userId: user._id,
            username: usrName || undefined,
            email: usrEmail || undefined,
            password: usrOldPwd,
            newPassword: usrNewPwd
          })
          .then(() => {
            setMsg('Data updated');
          })
          .catch(() => setError('Invalid passwords'));
      }
    } catch (error) {
      setError('ERROR: ' + error);
    }
  };

  const paymentHandler = (e) => {
    e.preventDefault();

    axios
      .post('/user/payment', {
        userId: user._id,
        cardNumber: ccNum,
        cardHolder: ccHolder,
        cardExpiredDate: ccDate
      })
      .then(() => setMsg('Payment Updated'))
      .catch(() => setError('Unable to update payment'));
  };

  return (
    <>
      {user && (
        <div className='settingContainer'>
          <div className='glass-rect'>
            <nav className='nav-bar'>
              <div className='nav-brand'>Setting Page</div>
              <ul className='nav-items'>
                <li
                  style={
                    curTab === 'profile' ? { textDecoration: 'underline' } : {}
                  }
                  className='nav-item'
                  onClick={() => setCurTab('profile')}
                >
                  Profile
                </li>
                <li
                  style={
                    curTab === 'payment' ? { textDecoration: 'underline' } : {}
                  }
                  className='nav-item'
                  onClick={() => setCurTab('payment')}
                >
                  Payment
                </li>
              </ul>
            </nav>
            {error && (
              <Alert variant='danger' dismissible onClose={() => setError('')}>
                {error}
              </Alert>
            )}
            {msg && (
              <Alert variant='success' dismissible onClose={() => setMsg('')}>
                {msg}
              </Alert>
            )}
            <br />
            <div className='contentBody'>
              {curTab === 'profile' ? (
                <>
                  <div className='img-wrapper'>
                    <img
                      id='profilePic'
                      src={
                        user
                          ? user.photoUrl
                          : 'https://consequenceofsound.net/wp-content/uploads/2018/08/maxresdefault2.jpg?quality=80&w=807'
                      }
                      width='300px'
                      height='300px'
                      className='feat-img'
                      onClick={() => newImg()}
                    />
                    <input
                      className='profileInp'
                      ref={fileRef}
                      id='hiddenImg'
                      hidden
                      type='file'
                      onChange={() => sendImg()}
                    />
                  </div>
                  <div className='main'>
                    <form onSubmit={submitHandler}>
                      <input
                        className='profileInp'
                        type='email'
                        placeholder={user.email}
                        value={usrEmail}
                        onChange={(e) => setUsrEmail(e.target.value)}
                      />
                      <br />
                      <input
                        className='profileInp'
                        type='text'
                        placeholder={user.username}
                        value={usrName}
                        onChange={(e) => setUsrName(e.target.value)}
                      />
                      <br />
                      <input
                        className='profileInp'
                        type='password'
                        placeholder='Old Password'
                        value={usrOldPwd}
                        onChange={(e) => setUsrOldPwd(e.target.value)}
                      />
                      <br />
                      <input
                        className='profileInp'
                        type='password'
                        placeholder='New Password'
                        value={usrNewPwd}
                        onChange={(e) => setUsrNewPwd(e.target.value)}
                      />
                      <br />
                      <input
                        className='profileInp'
                        type='submit'
                        value='Update'
                      />
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <form onSubmit={paymentHandler} className='ccBody'>
                    <h1 className='payment-card__title'>Card details</h1>
                    <div className='ccGroup payment-card__field--large'>
                      <label className='ccLabel'>Card number</label>
                      <input
                        className='payment-card__input payment-card__input--large'
                        maxLength='19'
                        placeholder='xxxx xxxx xxxx xxxx'
                        value={ccNum}
                        onChange={(e) => setCcNum(e.target.value)}
                      />

                      <label className='ccLabel'>Card Holder</label>
                      <input
                        className='payment-card__input payment-card__input--large'
                        maxLength='19'
                        placeholder='xxx'
                        value={ccHolder}
                        onChange={(e) => setCcHolder(e.target.value)}
                      />
                    </div>
                    <div className='payment-card__extra-fields'>
                      <div className='ccGroup ccSmallLabel'>
                        <label for='card-expiry' className='ccLabel'>
                          Expiry date
                        </label>
                        <input
                          className='payment-card__input'
                          placeholder='xx/xx'
                          value={ccDate}
                          onChange={(e) => setCcDate(e.target.value)}
                        />
                      </div>
                      <div className='ccGroup ccSmallLabel'>
                        <label for='card-ccv' className='ccLabel'>
                          CCV
                        </label>
                        <input
                          className='payment-card__input'
                          placeholder='xxx'
                          value={ccCVC}
                          onChange={(e) => setCcCVC(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button type='submit' variant='outline-secondary' size='lg'>
                      {user.payment ? 'Update' : 'Create'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

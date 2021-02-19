import axios from 'axios';

const logout = () => {
  localStorage.removeItem('usrID');
  axios
    .get('/api/auth/logout')
    .then(() => window.location.reload(false))
    .catch((err) => console.log(err));
};

export default logout;

import axios from 'axios';

const logout = () => {
  axios
    .get('/api/auth/logout')
    .then(() => window.location.reload(false))
    .catch((err) => console.log(err));
};

export default logout;

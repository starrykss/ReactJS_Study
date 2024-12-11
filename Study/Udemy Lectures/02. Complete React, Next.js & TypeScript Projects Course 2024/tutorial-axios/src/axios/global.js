import axios from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.baseURL = '<https://api.example.com>';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

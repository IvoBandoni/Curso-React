import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2b7e041096189276c55554b2fcb4a76b',
  },
});

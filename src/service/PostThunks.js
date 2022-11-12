import axios from 'axios';

const { REACT_APP_URL_API } = process.env;

const PostThunks = (path, data, config = {}) => {
  config.url = `${REACT_APP_URL_API}/api/${path}`;
  config.method = 'POST';
  config.data = data;

  const promise = new Promise((resolve, reject) => {
    resolve(axios(config));
  });
  return promise;
};

export default PostThunks;

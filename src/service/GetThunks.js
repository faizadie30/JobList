import axios from 'axios';

const { REACT_APP_URL_API } = process.env;

const GetThunk = async (path, config = {}) => {
  config.url = `${REACT_APP_URL_API}/api/${path}`;
  config.method = 'GET';

  const promise = new Promise((resolve, reject) => {
    resolve(axios(config));
  });
  return promise;
};

export default GetThunk;

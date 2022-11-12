import axios from 'axios';

const { REACT_APP_URL_API } = process.env;

const Delete = (path, config = {}) => {
  let BASE_URL = '';

  config.url = `${REACT_APP_URL_API}/api/${path}`;

  config.url = BASE_URL;
  config.method = 'Delete';

  const promise = new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

export default Delete;

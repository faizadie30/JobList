import axios from 'axios';

const { REACT_APP_URL_API } = process.env;

const Get = async (path, config = {}) => {
  config.url = `${REACT_APP_URL_API}/api/${path}`;
  config.method = 'GET';

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

export default Get;

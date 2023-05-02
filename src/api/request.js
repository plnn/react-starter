import axios from 'axios';
// eslint-disable-next-line import/extensions
import Endpoints from './endpoints.json';

const getEnv = () => {
  // TODO: create env files for each env and try to get ENV VARIABLE from it.
  if (process.env.NODE_ENV === 'development') return ' http://127.0.0.1:3001';

  return '';
};

const findEndpoint = (endpoint) => {
  return `${getEnv()}${Endpoints[endpoint]}`;
};

async function Request(
  method,
  endpoint,
  data = null,
  headers,
  queryString,
  responseType = null,
  returnResponseObject = false,
) {
  let targetEndpoint = findEndpoint(endpoint);
  if (queryString !== null) {
    if (typeof queryString === 'object') {
      // if you have some different pattern then only id you can specify on your endpoints file
      Object.keys(queryString).forEach((key) => {
        targetEndpoint = targetEndpoint.replace(`{{${key}}}`, queryString[key]);
      });
    } else {
      targetEndpoint = targetEndpoint.replace('{QUERYSTRING}', queryString);
    }
  } else {
    targetEndpoint = targetEndpoint.replace('{QUERYSTRING}', '');
    targetEndpoint = targetEndpoint.replace('?', '');
  }
  // you can customize headers.
  const allHeaders = Object.assign(
    { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
    headers,
  );

  const options = {
    method,
    headers: allHeaders,
    url: targetEndpoint,
    data,
  };

  if (!responseType) {
    options.responseType = responseType;
  }

  const makeRequest = async () => {
    document.body.classList.add('pending');
    try {
      const response = await axios(options);
      document.body.classList.remove('pending');
      if (returnResponseObject) {
        return response;
      }
      return response.data;
    } catch (e) {
      document.body.classList.remove('pending');
      console.log('error', e);
      // according to backend response, form your return response.
      if (e && e.response && e.response.status === 200) return e.response.data;

      return {
        Succeed: false,
        Data: null,
      };
    }
  };

  return makeRequest();
}

export default Request;

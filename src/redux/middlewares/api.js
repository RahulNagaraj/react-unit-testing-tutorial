import axios from 'axios';
import { API } from '../ducks/utils';

export const BASE_UNSPLASH_URI = 'https://api.unsplash.com';

const callApi = async (endpoint, method = 'GET', data = {}, params = {}) => {
  const url = `${BASE_UNSPLASH_URI}/${endpoint}`;
  const options = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Client-ID ${process.env.UNSPLASH_API_ACCESS_KEY}`,
    },
    method,
    params,
  };
  if (['POST', 'PUT'].includes(method)) options.body = data;

  try {
    const response = await axios.request({
      url,
      method,
      headers: options.headers,
      params: options.params,
      responseType: 'json',
    });
    if (response.status !== 200) return Promise.reject(response);
    return Promise.resolve(response.data);
  } catch (e) {
    return Promise.reject(e);
  }
};

const api = () => (next) => async (action) => {
  const callAPI = action[API];
  if (!callAPI) {
    return next(action);
  }

  const {
    endpoint, method, types, data, payload, params,
  } = callAPI;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every((type) => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = (body) => {
    const finalAction = { ...action, ...body };
    delete finalAction[API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType, payload }));

  try {
    const response = await callApi(endpoint, method, data, params);
    next(actionWith({
      type: successType,
      response,
      payload,
    }));
  } catch (e) {
    next(actionWith({
      type: failureType,
      payload,
      error: e,
    }));
  }

  return null;
};

export default api;

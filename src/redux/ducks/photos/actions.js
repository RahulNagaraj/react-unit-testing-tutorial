import types from './types';
import { API } from '../utils';

const fetchPhotos = () => ({
  [API]: {
    types: types.FETCH_PHOTOS_TYPES,
    method: 'GET',
    endpoint: 'photos',
  },
});

export default {
  fetchPhotos,
};

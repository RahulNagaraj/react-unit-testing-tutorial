import { API, createTypes } from './index';

export const GET_PHOTOS_NAMESPACE = 'PHOTOS';
export const GET_RANDOM_PHOTOS_NAME_SPACE = 'RANDOM_PHOTOS';

export const getPhotos = () => createTypes(GET_PHOTOS_NAMESPACE);

export const getRandomPhotos = () => createTypes(GET_RANDOM_PHOTOS_NAME_SPACE);

export const getPhotoAction = () => ({
  [API]: {
    method: 'GET',
    endpoint: 'photos',
    types: getPhotos(),
    params: {
      page: 1,
      per_page: 10,
    },
  },
});

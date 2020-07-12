import types from './types';

const fetchPhotos = () => ({
  type: types.FETCH_PHOTOS_REQUEST,
});

const fetchPhotosSuccess = (payload) => ({
  type: types.FETCH_PHOTO_SUCCESS,
  payload,
});

const fetchPhotosFailure = (error) => ({
  type: types.FETCH_PHOTO_FAILURE,
  error,
});

export default {
  fetchPhotos,
  fetchPhotosSuccess,
  fetchPhotosFailure,
};

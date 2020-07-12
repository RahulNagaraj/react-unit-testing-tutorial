import photoTypes from './types';

export const initialState = {
  isFetching: false,
  error: null,
  photos: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case photoTypes.FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case photoTypes.FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        photos: action.payload,
        error: null,
      };
    case photoTypes.FETCH_PHOTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: {
          errorMessage: action.error.data.errors,
          errorCode: action.error.status,
        },
      };
    default:
      return state;
  }
};

export default photoReducer;

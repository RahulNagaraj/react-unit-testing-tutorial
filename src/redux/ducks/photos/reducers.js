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
        photos: action.response,
        error: null,
      };
    case photoTypes.FETCH_PHOTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        photos: action.response,
        error: {
          errorMessage: action.error.message,
          errorCode: action.error.code,
        },
      };
    default:
      return state;
  }
};

export default photoReducer;

import { getPhotos } from '../actions/photos';

export const initialState = {
  isFetching: false,
  error: {
    errorMessage: '',
    errorCode: null,
  },
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getPhotos()[0]:
      return {
        ...state,
        isFetching: true,
      };
    case getPhotos()[1]:
      return {
        ...state,
        isFetching: false,
        photos: action.response,
      };
    case getPhotos()[2]:
      return {
        ...state,
        error: {
          ...state.error,
          message: action.error.message,
          errorCode: action.error.statusCode,
        },
      };
    default:
      return state;
  }
};

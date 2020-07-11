import counterTypes from './types';

export const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case counterTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case counterTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;

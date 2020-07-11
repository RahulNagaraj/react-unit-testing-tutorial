import counterTypes from './types';

const incrementAction = () => ({ type: counterTypes.INCREMENT });

const decrementAction = () => ({ type: counterTypes.DECREMENT });

export default {
  incrementAction,
  decrementAction,
};

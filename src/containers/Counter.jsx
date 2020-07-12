import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { photoActions } from '../redux/ducks/photos';
import { counterActions, counterSelectors } from '../redux/ducks/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => counterSelectors.getCount(state), shallowEqual);
  useEffect(() => {
    dispatch(photoActions.fetchPhotos());
  }, [count]);
  return (
    <div>
      {count}
      <br />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
        onClick={() => dispatch(counterActions.incrementAction())}
      >
        Increment
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
        onClick={() => dispatch(counterActions.decrementAction())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from '../redux/actions/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter, shallowEqual);
  return (
    <div>
      {counter.count}
      <br />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
        onClick={() => dispatch(incrementAction())}
      >
        Increment
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
        onClick={() => dispatch(decrementAction())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

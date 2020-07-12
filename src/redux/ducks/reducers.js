import { combineReducers } from 'redux';

import photo, { photoTypes } from './photos';
import counter, { counterTypes } from './counter';

export default combineReducers({
  [photoTypes.NAMESPACE]: photo,
  [counterTypes.NAMESPACE]: counter,
});

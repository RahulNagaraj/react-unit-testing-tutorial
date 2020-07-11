import { combineReducers } from 'redux';
import counter from './counter';
import photos from './photos';

export default combineReducers({
  counter,
  photos,
});

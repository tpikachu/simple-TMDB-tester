import { combineReducers } from 'redux';

import actor from './actor_reducer';
import movietable from './movietable_reducer';

const rootReducer = combineReducers({
  actor,
  movietable
});

export default rootReducer;

import { createStore, applyMiddleware } from 'redux';
import countReducer from './count_reducer';
// 引入 redux-thunk 用於支持異步 action
import thunk from 'redux-thunk';

export default createStore(countReducer, applyMiddleware(thunk));

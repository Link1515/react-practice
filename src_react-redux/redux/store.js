import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
// 引入 redux-thunk 用於支持異步 action
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// 引入 react 核心庫
import React from 'react';
// 引入 react-dom
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// 渲染 App 到頁面

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

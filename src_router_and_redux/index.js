// 引入 react 核心庫
import React from 'react';
// 引入 react-dom
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';

// 渲染 App 到頁面

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

store.subscribe(() => {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root')
  );
});

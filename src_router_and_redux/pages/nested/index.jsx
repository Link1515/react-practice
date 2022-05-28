import React, { Component } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default class nested extends Component {
  render() {
    return (
      <div>
        <h1>nested</h1>
        {/* 傳 search 參數 */}
        <NavLink to="nestedPage1?aaa=123">嵌套路由頁1</NavLink>
        {/* 傳 state 參數 */}
        <NavLink to="nestedPage2" state={{ test: 123 }}>
          嵌套路由頁2
        </NavLink>
        <Outlet />
      </div>
    );
  }
}

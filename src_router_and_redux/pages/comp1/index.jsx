// import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
export default function Comp1() {
  let param = useParams();
  console.log(param);
  return <div>我是 comp1</div>;
}

// export default class Comp1 extends Component {
//   render() {
//     console.log(this);
//     return <div>comp1</div>;
//   }
// }

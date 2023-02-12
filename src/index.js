import React from 'react';
import ReactDOM from 'react-dom/client';
import {Abc,Abc1,Abc2,Abc3,Abc4} from './App';
import {Hello,Commentss} from "./components/component";
// import H1 from './comments';
import Fun1 from './assign1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc />
    {/* <Commentss name="leela"/>
    <Abc1 />
    <Abc2 />
    <Abc3 />
    <Abc4 />
    <H1 />
     <Abc4 />
    <Abc4 />
    <Hello />
    <Fun1 />
     */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// import React from "react";
// import ReactDOM from "react-dom";
// const Msg=<h1>Welcome to react</h1>
// function Hello()
// {
//   return <h1>Here Iam using Functional Components</h1>
// }
// ReactDOM.render(
//   Msg,
//   <Hello />,
//   document.getElementById("root"),
// )


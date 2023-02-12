// import { Commentss } from './components/component';
import Fun1 from './assign1';
import Semanticcards from './assign2';
// import './style.css'
import H1 from './comments';
import Assign3 from './assign3';
import Usingprops from './usingprops';
import {Listrendering,Listrendering2,Listrendering3} from './Listrendering';
import {Reactclone1,Reactclone2} from './react';
// import {Classbasedcompo,Classbasedcompo3} from './classbasedcompo';
import Assign5 from './assign5';
import Navbar from './giftque';
import Button from './button';
import Hook1 from './Hook1';
import Usingbootinreact from './usingbootinreact';
function Abc(){
  return ( 
  <>
  
  {/* <Fun1 />
  <Semanticcards />
  <Assign3 />
  <Usingprops name="leela" edu="Btech 2nd IT"/>
  
  <Listrendering />
  <Listrendering2 /> 
  <Listrendering3 /> */}
  {/* <Reactclone1 />
  <Reactclone2 heading1="Declarative"  text1="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components data changes."/>
  
  <Reactclone2 heading2="Component-based" text2="Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

" />
<br></br>
<Reactclone2 heading3="Declarative"  text3="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components data changes."/> */}
{/* <Classbasedcompo />
<Classbasedcompo3 /> */}
{/* <Assign5 /> */}
{/* <Navbar name1="Platforms" name2="Solutions" name3="Integrations" name4="Customers" name5="Plans" name6="Resources" name7="signin"/> */}
{/* <Button /> */}
{/* <Hook1 /> */}
<Usingbootinreact />
      {/* <h1>Hello</h1>
      <h1>React js</h1>
      <h1>This is my first project in react</h1> */}
     
  </>
  )
}
// function Abc2(){
//   return (
//     <>
//     <h1>
//       This is abc2 function in app.js
//     </h1>
//     <h1>
//       Iam seeing how these 2 functions in abc going to be executed
//     </h1>
//     <h1>
//       Here iam exporting and importing 2 functions at a time
//     </h1>
//     </>
//   )
// }
function Abc1(){
  let college="SVECW";
  return (
   <>
   <h1>Here iam using js inside jsx</h1>
   <h1>
    Welcome to {college}
   </h1>
   
   </>
  )
}
function Abc2()
{
  const student={
    name:"leela",
    branch:"IT",
    sub:"React class"
  }
  return (
    <>
    <h1>
      Welcome {student.name} of {student.branch} to {student.sub}
    </h1>
    </>
  )
}
function Abc3(){
  return (
    <>
    <h1>
      Here iam using css styles inside jsx
    </h1>
    <h1 style={{color:'red'}}>Here iam using inline css</h1>
    <h2>Here iam using eexternal css</h2>
    </>
  )
}
function Abc4(){
  return (
    <div className="div1">
      WELCOME TO SVECW OF IT DEPARTMENT
    </div>
  )
}

export {Abc,Abc1,Abc2,Abc3,Abc4};
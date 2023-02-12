import React, { useState } from 'react'

function Hook1() {
const [count1,setCount1]=useState(0);
const[count2,setCount2]=useState(0);
const[clg,setSdata]=useState("SVECW");
const[details,setSdata1]=useState({
    name:"Leela",
    branch:"IT"
});
const update1=()=>{
    setCount1(count1+1);
}
const update2=()=>{
    setCount1(count1-1);
}
const update3=()=>{
    setCount1(count1+2)
}
const update4=()=>{
    setSdata("Shri Vishnu College")
}
// changing both name and branch
const change=()=>{
    setSdata1({name:"chandu",branch:"info tech"
})

}
// to change name only or branch only
const change1=()=>{
    setSdata1({...details,name:"leelaaa"})
}
const update=(op)=>{
    if(op==="+")
    {
        setCount2(count2+2);
    }
    if(op==="-")
    {
        setCount2(count2-2);
    }
}
  return (
    <div>
      <h1>count1 is { count1}</h1>
      <h2>College is {clg}</h2>
      <h2>My name is {details.name} and Iam from {details.branch}</h2>
      <button onClick={change}>Click to change name and branch</button>
      <button onClick={change1}>Click to change name only</button>
      <button onClick={update1}>+</button>
      <button onClick={update2}>-</button>
      <button onClick={update3}>click to add 2 at a time</button>
      <button onClick={update4}>click to change clg</button>

      <h1>count2 is { count2}</h1>
      <button onClick={()=>update("+")}>+</button>
      <button onClick={()=>update("-")}>-</button>
    </div>
  )
}
export default Hook1;

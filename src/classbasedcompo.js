import './style123.css'
import React, { Component } from 'react';

class Classbasedcompo extends Component {
  render() {
    return (
      <div>
        <h1>Iam a classbased component</h1>
        
      </div>
    )
  }
};


// class Classbasedcompo2 extends Component{
//     state={
//         count:0
//     }
//     update1=()=>{this.setState({count:this.state.count+1})};
//     render(){
//         return(
//             <>
//             <h3>count:{this.state.count}</h3>
//             <button onClick={this.update1}>+</button>
                
//             <button onClick={ ()=>this.setState({count:this.state.count-1})} >-</button>
//             </>
//         )

//     }
// }





class Classbasedcompo3 extends Component {
   
 constructor(props) {
   super(props)
 
   this.state = {
    count:0};
    // setInterval((()=>{this.setState({count:this.state.count+1})}),1000)
   }
   componentDidMount()
   {
    setInterval((()=>{this.setState({count:this.state.count+1})}),1000)
   }
   componentDidUpdate(){
    if(this.state.count===10){
        alert("Take a break")
    }
   }
    render() {
    return (
      <div>
        <h3>count:{this.state.count}</h3>
      </div>
    )
  }
}

export  {Classbasedcompo,Classbasedcompo3};
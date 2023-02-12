import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
 
    update=()=>{this.setState({count:this.state.count+1})};  
  render() {
    return (
      <div>
        <h1>count is {this.state.count}</h1>
        <button onClick={this.update}>+</button>
        
      </div>
    )
  }
}
export default Button
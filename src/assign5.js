import React, { Component } from 'react'
import './digiclock.css'
// class Assign5 extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         time: new Date()
//       }
//     }
//     componentDidMount() { // create the interval once component is mounted
//         this.update = setInterval(() => {this.setState({ time: new Date() });
//     }, 1 * 1000); // every 1 seconds
//     }
//     // setInterval((()=>{this.setState({count:this.state.count+1})}),1000)
//     componentDidUpdate(){
//         if(this.update=="12:46:40 AM"){
//             alert("Take a break")
//         }
//        }
//   render() {
//     const {time}=this.state
//     return (
//       <div>
//         <h2>CurrentTime:{time.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }
class Assign5 extends Component {
    constructor (props) {
        super(props);

        this.state = {
            dateClass: new Date()
        }
        
    }

    setTime = () => {
        this.setState({
            dateClass: new Date()
           
        })
        this.time = this.state.dateClass.toLocaleTimeString();
       
        
    }

    componentDidMount () {
        setInterval(this.setTime, 1000)
    }
    componentDidUpdate(){
        if(this.time==="6:52:40 PM"){
            alert("Take a break")
        }
    }
    render () {
        return (
            <div className='digi1'>
                <div className='digialaram'>
                {this.time}
                </div>
            </div>
        )
    }
}



export default Assign5;
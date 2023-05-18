import React, { Component } from 'react'
import Carddd from './composant/Carddd'

export class App extends Component {
  
  constructor(){
    super()
    this.state={
      voir:false 
    }
  }
showhide=()=>{
  this.setState({voir: !this.state.voir})
}
  render() {
    return (
      <div>
        <h1  style={{display:"flex",justifyContent:"center"}} >mon portfolio</h1> <br/>
        <button  onClick={()=> this.showhide()} >show/hide</button>
        {this.state.voir &&   <Carddd/>}
      
      </div>
    )
  }
}

export default App



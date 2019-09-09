import React, { Component } from 'react'
import Buttonbar from './Buttonbar'
import Githubjobs from './Githubjobs'

class Githubjobview extends Component {
  render() {
    return (
      <div>
          <Buttonbar />
          <div className="row">
          <Githubjobs />
          </div>
          
        
      </div>
    )
  }
}


export default Githubjobview
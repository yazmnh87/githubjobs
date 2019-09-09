import React, { Component } from 'react'
import { Consumer } from '../Context'

class Searchitems extends Component {
  render() {
    return (
     <Consumer>
         {value => {
                console.log(value.searchJobRes)
                if (value.searchJobRes !== undefined){
                    return value.searchJobRes.map(res => {
                        return <div className="col-sm-4">
                        <div className="card">
                        <div className="card-body">
                        {/* <img alt="" src={res.img} style={{width: '80px', height: '30px'}}/> */}
                         <h6 className="card-title" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth:"220px"}}>{res.title} </h6>
                             <h6>Location: {res.location}</h6>
                             <h6>Company: {res.company}</h6>
                         </div>
                         </div>
                         </div>
                    })
                } 
                
         }}
     </Consumer>
    )
  }
}


export default Searchitems
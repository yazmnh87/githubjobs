import React, {useEffect} from 'react'
import { Consumer } from '../Context'
// import gitimg from '../
const Githubjob = (props)=> {

useEffect(()=> {
  console.log(props)
},[props.id])

  return (
    <Consumer> 
        {value =>{
            return( 
            <div className="col-sm-4">
            <div className="card">
            <div className="card-body">
            <img alt="" src={props.img ? props.img : ""} style={{width: '80px', height: '30px'}}/>
             <h6 className="card-title" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth:"220px"}}>{props.title} </h6><i className="fas fa-sort-down" style={{cursor: "pointer"}} onClick={props.onClick}/>
             {props.show && props.id === props.index  ? (
               <>
                      <h6>Location: {props.location}</h6>
                      <h6>Company: {props.company}</h6>
              </>
                  ) : null}
             </div>
             </div>
             </div>
             )}}
         
   
    </Consumer> 
  )
}



export default Githubjob
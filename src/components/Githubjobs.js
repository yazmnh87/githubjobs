import React, { useState } from 'react'
import { Consumer } from '../Context'
import Githubjob from './Githubjob'

const Githubjobs = () => {

  const [selected, setSelected] = useState(null)
  const [show, setShow] = useState(false)

    const showCard = (id) => {
      console.log(id)
     setShow(!show);
     setSelected(id);
    
    }


    return (
      <Consumer>

          {value => {
              if(value.jobs !== undefined) {
                return value.jobs.map((item,i )=> {
                    return  ( !value.loading ? <Githubjob key={item.id} id={selected} index={i} company={item.company} title={item.title} description={item.description} location={item.location} img={item.company_logo} showCard={show} onClick={()=> showCard(i)}/> : <span>Loading</span>
                    )
                  
                    
                })
            }
          }}

      </Consumer>
        
   
    )
  }



export default Githubjobs
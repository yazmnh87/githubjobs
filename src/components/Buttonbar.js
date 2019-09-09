import React from 'react'
import { Consumer } from '../Context'


const Buttonbar = () => {
  return (
      <Consumer>
          {value => {
              if( value.pageNum === 1){
              return (
                <React.Fragment>
                    <button onClick={value.updtNum} className="btn btn-lg btn-light">Next</button>
                    <h3>{value.pageNum}</h3>
                </React.Fragment>
              )}
              else if(value.jobs.length === 50 ) {
                  return (
                  <div>
                      <div className="justify-content-end">
                        <button onClick={value.drecPageNum} className="btn btn-lg btn-light">Previous</button>
                        <button onClick={value.updtNum} className="btn btn-lg btn-light">Next</button>
                        <h3>{value.pageNum}</h3>  
                    </div>
                  </div>
                  )
              } 
              else if (value.jobs.length < 50){
                  return (
                        <div>
                      <div className="justify-content-end">
                        <button onClick={value.drecPageNum} className="btn btn-lg btn-light">Previous</button>
                        </div>
                        </div>
                    
              )}
                }}
      </Consumer>
  
            )}


export default Buttonbar
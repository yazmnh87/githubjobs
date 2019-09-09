import React, { Component } from 'react'
import { Consumer } from '../Context'
import Searchitems from '../components/Searchitems'

class Search extends Component {
  render() {
    return (
        <Consumer>
      {value => {

    return <div>
        <form onSubmit={value.getSearchResults}>
        <div>
        <label>Terms</label>
        <input type="text" className="ml-3 disabled" value={value.term} onChange={value.updateSearchTerm} name={value.term}></input>
        </div>
        <div>
        <label>Location</label>
        <input type="text" className="ml-3" value={value.location} onChange={value.updateSearchLocation} name={value.location}></input>
        </div>
        <div>
        <input type="radio" className="mr-3 disabled"></input>
        <label>Full Time</label>
        </div>
        <div>
        <input type="radio" className="mr-3 disabled"></input>
        <label>Part Time</label>
        </div>
        <button className="btn btn-primary btn-lg">Submit</button>
        </form>
        <h3>Results:{value.searchJobRes.length}</h3>
        <Searchitems />
        </div>
      }}
      </Consumer>
    )}
}


export default Search
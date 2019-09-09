import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        jobs: [],
        searchJobRes: [],
        pageNum: 1,
        term: "",
        location: "",
        showJobInfo: false, 
        loading: false
    }

componentDidMount(){
    this.getJobsData()
    }

getJobsData(){
    const pageNumber = `?page=${this.state.pageNum}`
    this.setState({loading: true})
    axios.get(`https://vschool-cors.herokuapp.com?url=https://jobs.github.com/positions.json${pageNumber}`).then(response => {

            this.setState({
                jobs: response.data
        }, ()=> this.setState({loading: false}))
})
}

updatePageNum = async () => {
    console.log("i was clicked")
   await this.setState(ps => ({
        pageNum: ps.pageNum +1
    }))
    this.getJobsData()
}

decrePageNum = async () => {
    console.log("i was clicked")
 await this.setState(ps => {
     return {   pageNum: ps.pageNum -1
     }
    })
    this.getJobsData()
    
    
}

updateSearchLocation = e => {
    this.setState({
        location: e.target.value
    
    })}

    updateSearchTerm = e => {
        this.setState({
            term: e.target.value
        
        })}

onShowClick = (e) => {
    this.setState({
    showJobInfo: !this.state.showJobInfo
    })
}

getSearchResults = (e) => {
    e.preventDefault();
const location = this.state.location
axios.get(`https://vschool-cors.herokuapp.com?url=https://jobs.github.com/positions.json?location=${location}`)
.then(res => {this.setState({
    searchJobRes: res.data
})
console.log(res)
})
.catch(err => {console.log(err)});
}


    render () {
        return (
            <Context.Provider value={{
                getSearchResults: this.getSearchResults,
                onShowClick: this.onShowClick,
                updateSearchTerm: this.updateSearchTerm,
                updateSearchLocation: this.updateSearchLocation,
                drecPageNum: this.decrePageNum,
                updtNum: this.updatePageNum,
                prevRes: this.previousRes,
                nextRes: this.nextRes,
                ...this.state}}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
        <div className="container">
            {/* <Link to="/" className="text-white">Github Jobs</Link> */}
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mr-1">
                    <Link to="/" className="text-white">Home</Link>
                    </li>
                    <li className="nav-item mr-1">
                    <Link to="/about" className="text-white">About</Link>
                    </li>
                    <li className="nav-item mr-1">
                    <Link to="/search" className="text-white">Search</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </React.Fragment>
  )
}


export default Navbar
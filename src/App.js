import React, { Component } from 'react';
import { Provider } from './Context'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Search from './pages/Search'
import About from'./pages/About'
import Githubjobview from './components/Githubjobview'
import {HashRouter as Router,Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <div className="container">
      <Header className="mt-3"/>
      <Navbar />
      <Switch> 
      <Route exact path="/" component={Githubjobview}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/search" component={Search}/>
      </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

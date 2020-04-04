import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ResourceList from './components/ResourceList'



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/resources" component={ResourceList}/>
        </Switch>
      </Router>
          <div>
           
          </div>
     
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ResourceList from './components/ResourceList.jsx'
import UserAccount from './components/UserAccount.jsx'
import singleResource from './components/singleResource'
import UsersList from './components/UsersList'

import './App.css'



import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/resources" component={ResourceList}/>
          <Route exact  path="/resources/:resourceId" component={ singleResource}/>
          <Route exact path="/account" component={ UserAccount}/>
          <Route exact path="/users" component={UsersList} />
        </Switch>
      </Router>
          <div>
           
          </div>
     
    </div>
  );
}

export default App;

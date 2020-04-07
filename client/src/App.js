import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ResourceList from './components/ResourceList.jsx'

import singleResource from './components/singleResource'
import UsersList from './components/UsersList'
import SingleUser from './components/SingleUser'
import SingleComment from './components/SingleComment.jsx'

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
     
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={ SingleUser} />
          <Route exact path="/comments/:commentId" component={ SingleComment } />
        </Switch>
      </Router>
          <div>

            
          </div>
     
    </div>
  );
}

export default App;

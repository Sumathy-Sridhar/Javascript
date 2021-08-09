import React from 'react';

import { Form } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AccForm from './ReactAssessment/AccForm';
import Dashboard from './ReactAssessment/Dashboard';
import Navbarcomp from './ReactAssessment/Navbarcomp';

function App() {
  return (
<div className="App">
    <Navbarcomp/>
        <Form>
      <Router>
    <Switch>        
          <Route path="/landing" exact component={Navbarcomp}></Route>
          <Route path="/create" exact component={AccForm}></Route>
          <Route path="/dash" exact component={Dashboard}></Route>
        </Switch>
        </Router>
      </Form>
    
    </div>
  );
}

export default App;

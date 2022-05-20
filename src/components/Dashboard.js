import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Home';
import AddForm from './AddForm';
import EditForm from './EditForm';

function Dashboard() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/AddForm" component={AddForm}/>
          <Route exact path="/EditForm/:EditID" component={EditForm}/>
        </Switch>
      </Router>      
    </div>
  );
}
export default Dashboard;
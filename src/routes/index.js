import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from '../containers/Home';
import SectionDetail from '../containers/SectionDetail';

const Root = () => {
  console.log("Root")
  return (
    <Router>
      <Redirect path="/" to="/home"/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/article/:sectionId" component={SectionDetail}/>
      </Switch>
    </Router>
  )
}

export default Root
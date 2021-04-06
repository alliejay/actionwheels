import React from 'react';
import Navigation from '../../components/Navigation/index.js';
import ActionWheels from '../../ActionWheels';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const PageWrapper = () => {

  const pathname = window.location.pathname;

  console.log("windonw", window.location.pathname)

    return <div>
      <Router>
            <ActionWheels />
      </Router>
    </div>

};

export default PageWrapper;
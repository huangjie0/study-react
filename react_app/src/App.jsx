import React, { Component } from "react";
import { Link,Route } from 'react-router-dom';
import Home from './components/Home'
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink> */}
              {/* <Link to="/about" className="list-group-item">about</Link>
              <Link to="/home" className="list-group-item">home</Link> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/about" element={<Home />}></Route>
              </Routes> */}
              {/* <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home}></Route> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

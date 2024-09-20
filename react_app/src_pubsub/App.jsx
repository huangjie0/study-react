import React , { Component } from 'react';
import './App.css'
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {
  render(){
    return (
      <div>
        <div className="box">
          <div className="box1">
              <Search/>
          </div>
        </div>
        <List/>
      </div>
    )
  }

}


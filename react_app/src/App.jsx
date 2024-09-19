import React , { Component } from 'react';
import './App.css'
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {

  state = {
    users:[],
    isFirst: true,
    isLoading:false,
    err:''
  } 

  updateAppStatus = (value)=>{
    this.setState(value)
  }

  render(){
    return (
      <div>
        <div className="box">
          <div className="box1">
              <Search updateAppStatus={ this.updateAppStatus } />
          </div>
        </div>
        <List { ...this.state }/>
      </div>
    )
  }

}


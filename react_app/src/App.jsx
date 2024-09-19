import React , { Component } from 'react';
import './App.css'
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {

  state = {
    users:[]
  }

  saveUsers = (value)=>{
    this.setState({
      users:value
    })
  }  

  render(){
    return (
      <div>
        <div className="box">
          <div className="box1">
              <Search saveUsers={ this.saveUsers } />
          </div>
        </div>
        <List users = { this.state.users }/>
      </div>
    )
  }
}


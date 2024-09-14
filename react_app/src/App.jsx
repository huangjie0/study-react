import React , { Component } from 'react';
import './App.css'
import Header from './components/Header';
import List from './components/List'
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    todos:[
      {
        id:'001',
        name:'吃饭',
        done:true
      },
      {
        id:'002',
        name:'睡觉',
        done:true
      },
      {
        id:'003',
        name:'打代码',
        done:false
      }
    ]
  }
  render(){
    return (
      <div className="todo-container">
        <div className="todo-wrap">
            <Header></Header>
            <List todos={this.state.todos}></List>
            <Footer></Footer>
        </div>
      </div>
    )
  }
}


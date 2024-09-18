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
  
  addTodo = (objValue)=>{
    const { todos } = this.state
    const newTodos = [objValue,...todos]

    this.setState({
      todos : newTodos
    })
  }

  changeStatus = (id,status)=>{
    const { todos } = this.state;

    const newTodos = todos.map((item)=>{
      if(id === item.id) return { ...item, done:status }
      else return item
    })

    this.setState({
      todos:newTodos
    })
    
  }

  deleteList = (id)=>{
    const { todos } = this.state;
    const newTodos =  todos.filter((item) => item.id !== id)
    this.setState({
      todos:newTodos
    })
  }

  isCheckAllList = (type)=>{
    const { todos } = this.state;

    const newTodos = todos.map((item)=>{
      return {...item,done:type}
    })

    this.setState({
      todos:newTodos
    })
  }

  clearDone = ()=>{
    const newTodos = this.state.todos.map((item)=>{
      return { ...item , done:false}
    })

    this.setState({
      todos:newTodos
    })
    
  }

  render(){
    return (
      <div className="todo-container">
        <div className="todo-wrap">
            <Header addTodo = { this.addTodo }></Header>
            <List todos={this.state.todos} changeStatus={ this.changeStatus } deleteList={ this.deleteList }></List>
            <Footer todos={ this.state.todos } isCheckAllList={ this.isCheckAllList } clearDone={ this.clearDone }></Footer>
        </div>
      </div>
    )
  }
}


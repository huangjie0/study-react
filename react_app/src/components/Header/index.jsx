import React, { Component } from 'react'
import './index.css'
import { v4 as uuidv4 } from 'uuid';

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
          <input type="text" onKeyUp = { this.handleKeyUp } placeholder="请输入你的任务名称，按回车键确认"/>
      </div>        
    )
  }
  handleKeyUp = (event)=>{
    const { addTodo } = this.props 
    if(event.keyCode !== 13 || event.target.value === '') return

    addTodo({
      id: uuidv4(),
      name: event.target.value,
      done: false
    })
    
  }
} 
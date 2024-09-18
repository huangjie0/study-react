import React, { Component } from 'react'
import './index.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default class Header extends Component {

  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  
  render() {
    return (
      <div className="todo-header">
          <input type="text" onKeyUp = { this.handleKeyUp } placeholder="请输入你的任务名称，按回车键确认"/>
      </div>        
    )
  }
  handleKeyUp = (event)=>{
    const { addTodo } = this.props 
    if(event.keyCode !== 13 || event.target.value.trim() === '') return

    addTodo({
      id: uuidv4(),
      name: event.target.value,
      done: false
    })

    event.target.value = ''
    
  }
} 
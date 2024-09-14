import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const { todos, changeStatus } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => <Item key={todo.id} { ...todo } changeStatus = { changeStatus }></Item>)
        }
      </ul>
    )
  }
}
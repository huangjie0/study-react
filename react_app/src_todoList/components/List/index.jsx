import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import PropTypes from 'prop-types';

export default class List extends Component {

  static propTypes = {
    todos:PropTypes.array.isRequired,
    changeStatus:PropTypes.func.isRequired
  }

  render() {
    const { todos, changeStatus , deleteList } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => <Item key={todo.id} { ...todo } changeStatus = { changeStatus } deleteList={ deleteList }></Item>)
        }
      </ul>
    )
  }
}
import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  render() {
    const { todos } = this.props;

    const doneCount = todos.reduce((pre,current)=>{
      return pre + (current.done ? 1 : 0)
    },0);

    const total = todos.length;

    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked = { doneCount === total && total !== 0 ? true : false  } onChange={ this.changeStatus }/>
            </label>
            <span>
                <span>已完成{ doneCount }</span> / 全部{ total }
            </span> 
            <button className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
  changeStatus = (event)=>{
    this.props.isCheckAllList(event.target.checked)
  }
}

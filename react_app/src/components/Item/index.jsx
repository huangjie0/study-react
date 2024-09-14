import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse:false
  }
  render() {
    const { name,done,id } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor : mouse ? '#add' : 'white' }} onMouseLeave = { this.handleMouse(false) } onMouseEnter={ this.handleMouse(true) }>
        <label>
            <input type="checkbox" defaultChecked = { done } onChange={this.handleChange(id)}/>
            <span>{ name }</span>
        </label>
        <button className="btn btn-danger" style= {{ display: mouse ? 'block' : 'none' }} >删除</button>
      </li>
    )
  }

  handleMouse = (flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
  }

  handleChange = (id)=>{
    return (event) => {
      this.props.changeStatus(id,event.target.checked)
    }
  }
}

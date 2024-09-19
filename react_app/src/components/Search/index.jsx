import React, { Component } from 'react'
import './index.css'

export default class Search extends Component {
  render() {
    return (
      <div className="box2">
          <div className="box3">Search Github Users</div>
          <div className="box4">
              <input type="text" className="input" placeholder="请输入要搜索的内容呢"/>
              <button className="btn">Search</button>
          </div>
      </div>
    )
  }
}
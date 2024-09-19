import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFirst , isLoading , err } = this.props;
    return (
      <div className="list">
        {
          isFirst ? <h2>输入关键字，随后点击搜索</h2> : isLoading ? <h2>Loading......</h2> : err ? <h2 style={{ color:'red' }}> { err } </h2> :
          users.map((item) => {
            return (
              <div className="list1" key={ item.id }>
                  <div className="list2">
                      <a href = { item.html_url }>
                          <img src={item.avatar_url} alt="avatar"/>
                      </a>
                  </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="list">
        {
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

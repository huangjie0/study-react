import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
  
  state = {
    users:[],
    isFirst: true,
    isLoading:false,
    err:''
  } 

  render() {
    const { users,isFirst,isLoading,err} = this.state
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

  componentDidMount(){
      PubSub.subscribe('message',(_,data)=>{
        this.setState(data)
      })
  }
}

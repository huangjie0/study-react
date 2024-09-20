import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PunSub from 'pubsub-js'

export default class Search extends Component {
  render() {
    return (
      <div className="box2">
          <div className="box3">Search Github Users</div>
          <div className="box4">
              <input ref={ c => this.inputRef = c }  type="text" className="input" placeholder="请输入要搜索的内容呢"/>
              <button className="btn" onClick = { this.search }>Search</button>
          </div>
      </div>
    )
  }
  search = ()=>{
    PunSub.publish('message',{isFirst:false,isLoading:true})
    axios.get(`https://api.github.com/search/users?q=${this.inputRef.value}`).then(res=>{
      PunSub.publish('message',{isLoading:false , users:res.data.items })
    }).catch((err)=>{
      PunSub.publish('message',{isLoading:false , err:err.message })
    })
  }
}
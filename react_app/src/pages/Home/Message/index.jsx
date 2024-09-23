import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Routes , Route } from 'react-router-dom'

export default class Message extends Component {
    state = {
        messageArr:[
            {
                id:'01',
                title:'消息1'
            },
            {
                id:'02',
                title:'消息2'
            },
            {
                id:'03',
                title:'消息3'
            }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                  {
                    this.state.messageArr.map((item)=>{
                        return (
                            <li key={ item.id }>
                                <Link to={ `detail/${item.id}/${item.title}` }>{ item.title }</Link>
                            </li>
                        )
                    })
                  }
                </ul>
                  <Routes>
                    <Route path='detail/:id/:title' element={ <Detail/> }></Route>
                  </Routes>
            </div>
        )
    }
}

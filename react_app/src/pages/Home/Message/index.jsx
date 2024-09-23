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
                                {/* params */}
                                {/* <Link to={ `detail/${item.id}/${item.title}` }>{ item.title }</Link> */}
                                {/* search */}
                                {/* <Link to={ `detail/?id=${item.id}&title=${item.title}` }>{ item.title }</Link> */}
                                {/* state */}
                                <Link to="detail" state={{ id:item.id,title:item.title }}>{ item.title }</Link>
                            </li>
                        )
                    })
                  }
                </ul>
                  <Routes>
                    <Route path='detail' element={ <Detail/> }></Route>
                  </Routes>
            </div>
        )
    }
}

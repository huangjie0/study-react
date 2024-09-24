import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

 export default function Message(){
    const [messages] = useState([
        {
            id:'01',
            title:'消息1',
            content:"花见花开尽快"
        },
        {
            id:'02',
            title:'消息2',
            content:"阿萨的皇帝皇后"
        },
        {
            id:'03',
            title:'消息3',
            content:"结婚后很快就会"
        }
    ])
        return (
            <div>
                <ul>
                  {
                    messages.map((item)=>{
                        return (
                            <li key={ item.id }>
                                <Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link>
                            </li>
                        )
                    })
                  }
                </ul>
                <Outlet/>
            </div>
        )
}

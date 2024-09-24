import React, { useState } from 'react'
import { Link, Outlet , useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate()

    const showDetail = (id,title,content)=>{
        return ()=>{
            navigate('detail',{
                state:{
                    id,
                    title,
                    content
                }
            })
        }
    } 
        return (
            <div>
                <ul>
                  {
                    messages.map((item)=>{
                        return (
                            <li key={ item.id }>
                                {/* <Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link> */}
                                {/* <Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link> */}
                                <Link to='detail' state={{ id:item.id,title:item.title,content:item.content }}>{item.title}</Link>
                                <button onClick={ showDetail(item.id,item.title,item.content) }>查看详情</button>
                            </li>
                        )
                    })
                  }
                </ul>
                <Outlet/>
            </div>
        )
}

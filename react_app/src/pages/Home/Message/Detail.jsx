import React from 'react'
import { useParams } from 'react-router-dom';

export default function Detail (){
    const data = [
        {
            id:'01',
            content:"你好，中国！"
        },
        {
            id:'02',
            content:'你好，陌生人'
        },
        {
            id:'03',
            content:'你好，黄杰'
        }
    ]
    const { id,title } = useParams()
    const detailContent = data.find((item)=>{
        return item.id === id
    })
    
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{detailContent.content}</li>
      </ul>
    )
}

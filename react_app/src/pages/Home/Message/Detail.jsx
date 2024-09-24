import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail (){
    const { id,title,content } = useParams();
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{content}</li>
      </ul>
    )
}

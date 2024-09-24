import React from 'react'
import { useParams,useMatch,useSearchParams,useLocation } from 'react-router-dom'

export default function Detail (){
    // const { id,title,content } = useParams();
    // const x = useMatch('/home/message/detail/:id/:title/:content')
    // console.log(x);

    // const [params,setSearch] = useSearchParams()
    const { state:{id,title,content} } = useLocation()
    return (
      <ul>
        {/* <li>
            <button onClick={()=>setSearch("id=008&title='解决'&content='换句话菊花'")}>点我更新search参数</button>
        </li> */}
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{content}</li>
      </ul>
    )
}

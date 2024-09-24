import React,{ useState } from 'react'
import { Navigate , NavLink , Outlet , useOutlet } from 'react-router-dom'

export default function Home(){
  const [sum,setSum] = useState(1)

  const changVal = ()=>{
    setSum(2)
  }
  console.log(useOutlet());
  return (
      <div>
          <h3>我是Home的内容</h3>
          { sum === 2 ? <Navigate to="/about"/> : <h4>当前的sum值为{ sum }</h4>}
          <button onClick={ changVal }>点我将sum值变成2</button>
          <div>
            <ul className='nav nav-tabs'>
              <li>
                <NavLink className="list-group-item" to="news">News</NavLink>
              </li>
              <li>
                <NavLink className="list-group-item" to="message">Message</NavLink>
              </li>
            </ul>
            <Outlet/>
          </div>
      </div>
  )
}

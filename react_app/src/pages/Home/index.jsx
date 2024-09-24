import React,{ useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home(){
  const [sum,setSum] = useState(1)

  const changVal = ()=>{
    setSum(2)
  }

  return (
      <div>
          <h3>我是Home的内容</h3>
          { sum === 2 ? <Navigate to="/about"/> : <h4>当前的sum值为{ sum }</h4>}
          <button onClick={ changVal }>点我将sum值变成2</button>
      </div>
  )
}

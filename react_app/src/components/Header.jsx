import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const back = ()=>{
        navigate(-1)
    }
    const forward = ()=>{
        navigate(1)
    }
  return (
    <h2>React Router Demo 
        <button onClick={ back }>后退</button>
        <button onClick={ forward }>前进</button>
    </h2>
  )
}

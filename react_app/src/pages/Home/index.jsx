import React, { Component } from 'react'
import { NavLink,Routes,Route,Navigate} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
              <ul className='nav nav-tabs'>
                <li>
                  <NavLink to='news' className="list-group-item">News</NavLink>
                </li>
                <li>
                  <NavLink to='message' className="list-group-item">Message</NavLink>
                </li>
              </ul>
            </div>
            <Routes>
              <Route path='*' element={ <Navigate to="news"/>}></Route>
              <Route path="news" element={ <News/> }></Route>
              <Route path="message/*" element={ <Message/> }></Route>
            </Routes>
        </div>
    )
  }
}

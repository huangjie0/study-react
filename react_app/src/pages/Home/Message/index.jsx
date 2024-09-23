import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
        <div>
            <ul>
                <li>
                    <a href="/message1">message001</a>
                </li>
                <li>
                    <a href="/message2">message2</a>
                </li>
                <li>
                    <a href="/message3">message3</a>
                </li>
            </ul>
        </div>
    )
  }
}

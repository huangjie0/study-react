import React, { Component } from 'react'
import { Select } from 'antd'
import store from '../redux/store'

export default class Count extends Component {
    state = {
        number:1,
        count:0
    }
    handleChange = (value)=>{
        this.setState({
            number:value
        })
    }
    // 加
    add = ()=>{
        const { number,count } = this.state
        this.setState({
            count:number + count
        })
    }
    // 减
    subtraction = ()=>{
        const { number,count } = this.state
        this.setState({
            count:count - number
        })
    }
    // 奇数就加
    odd = ()=>{
        const { number,count } = this.state
        if(count % 2 === 0) return
        this.setState({
            count: number + count
        })
    }

    asynchronous = ()=>{
        const { number,count } = this.state
        setTimeout(()=>{
            this.setState({
                count:number + count 
            })
        },500)
    }

    render() {
        const { count } = this.state
        return (
        <div>
            <h1>当前求和为：{ store.getState() }</h1>
            <Select
                defaultValue="1"
                style={{
                    width: 120,
                }}
                onChange={this.handleChange}
                options={[
                    {
                        value: 1,
                        label: '1'
                    },
                    {
                        value: 2,
                        label: '2'
                    },
                    {
                        value: 3,
                        label: '3'
                    }
                ]}
            />
            <button onClick={ this.add }>+</button>
            <button onClick={  this.subtraction}>-</button>
            <button onClick={ this.odd}>当前求和为奇数加</button>
            <button onClick={this.asynchronous}>异步加</button>
        </div>
        )
    }
}

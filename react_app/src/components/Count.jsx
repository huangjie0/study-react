import React, { Component } from 'react'
import { Select } from 'antd'
import store from '../redux/store'

export default class Count extends Component {
    state = {
        number:1
    }
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    handleChange = (value)=>{
        this.setState({
            number:value
        })
    }
    // 加
    add = ()=>{
        const { number } = this.state
        store.dispatch({
            type:'add',
            data:number
        })
    }
    // 减
    subtraction = ()=>{
        const { number } = this.state
        store.dispatch({
            type:'subtraction',
            data:number
        })
    }
    // 奇数就加
    odd = ()=>{
        const { number } = this.state
        if(store.getState() % 2 === 0) return
        store.dispatch({
            type:'add',
            data:number
        })
    }

    asynchronous = ()=>{
        const { number } = this.state
        setTimeout(()=>{
            store.dispatch({
                type:'add',
                data:number
            })
        },500)
    }

    render() {
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

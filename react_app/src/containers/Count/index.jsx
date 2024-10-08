import React, { Component } from 'react'
import { Select } from 'antd'
import { connect } from 'react-redux';
import { createAddAction , createSubtractionAction , createAsyncAddAction } from '../../redux/actions/count'

class Count extends Component {
    state = {
        number:1
    }
    handleChange = (value)=>{
        this.setState({
            number:value
        },()=>{
            console.log(this.state.number);
        })

        // this.setState((_state,_props)=>{
        //     return {
        //         number:value
        //     }
        // })
    }
    // 加
    add = ()=>{
        const { number } = this.state
        this.props.add(number)
    }
    // 减
    subtraction = ()=>{
        const { number } = this.state
        this.props.subtraction(number)
    }
    // 奇数就加
    odd = ()=>{
        const { number } = this.state
        if(this.props.count % 2 ===0 ) return
        this.props.add(number)
    }

    asynchronous = ()=>{
        const { number } = this.state
        this.props.asyncAdd(number,500)
    }

    render() {
        return (
        <div>
            <h1>当前求和为：{ this.props.count }</h1>
            <h2>下面的人为：</h2>
            <ul>
                {
                this.props.personList.map((item)=>{
                    return (
                        <li key={item.id}> 人名：{item.name} 岁数：{ item.age } </li>
                    )
                })
                } 
            </ul>
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

const mapStateToProps = state => ({count:state.summation,personList:state.showPerson})
const mapDispatchToProps = dispatch => (
    {
        add:(number)=>{
            dispatch(createAddAction(number))
        },
        subtraction:(number)=>{
            dispatch(createSubtractionAction(number))
        },
        asyncAdd:(number,time)=>{
            dispatch(createAsyncAddAction(number,time)) 
        }
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Count)



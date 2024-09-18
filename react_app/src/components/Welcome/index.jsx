import React ,{ Component } from 'react';
import axios from 'axios';
// import welcome from './index.module.css'

export default class Welcome extends Component{
    render(){
        return (
            <div>
                <button onClick={ this.getStudentData }>点我获取学生数据</button>
            </div>
        )
    }
    
    getStudentData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=2').then((res)=>{
            console.log(res);
        },(error)=>{
            console.log(error);
        })
    }
}
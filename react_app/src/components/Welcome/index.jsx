import React ,{ Component } from 'react';
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
        console.log("111");
    }
    
}
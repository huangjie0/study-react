import React, { createContext ,PureComponent} from 'react'

const MyContext = createContext();
const { Provider,Consumer } = MyContext;

export default class Context extends PureComponent {
    static getDerivedStateFromError(error){
        console.log(error);
    }
    state = {
        username:'Tom',
        age:19
    }

  render() {
    const { username,age } = this.state
    return (
        <div>
            <h1>我是context组件</h1>
            <h4>用户名是：{ username }</h4>
            <Provider value={{ username , age}}>
                <B render={(a)=><C a={ a }/>}/>
            </Provider>
        </div>
    )
  }
}

class B extends PureComponent{
    static contextType = MyContext
    
    state = {
        a:'纳米哈'
    }
    render(){
        const { a } = this.state
        return(
            <div>
                <h1>我是B组件</h1>
                <h4>从Context组件接受到的用户名是：{ this.context.username }</h4>
                { this.props.render(a)}
            </div>
        )
    }
}

class C extends PureComponent{
    static contextType = MyContext
    render(){
        const { a } = this.props;
        return(
            <div>
                <h1>我是C组件</h1>
                <h4>从Context组件接受到的用户名是：{ this.context.username }</h4>
                <h2>{ a }</h2>
            </div>
        )
    }
}

// function C (){
//     return (
//         <div>
//             <h1>我是C组件</h1>
//             <h4>从Context组件接受到的用户名是：
//                 <Consumer>
//                     {
//                         value =>{
//                             return `${value.username},age是${value.age}`
//                         }
//                     }
//                 </Consumer>
//             </h4>
//         </div>
//     )
// }

import React, { createContext ,PureComponent} from 'react'

const MyContext = createContext();
const { Provider,Consumer } = MyContext;

export default class Context extends PureComponent {
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
                <B/>  
            </Provider>
        </div>
    )
  }
}

class B extends PureComponent{
    static contextType = MyContext
    render(){
        return(
            <div>
                <h1>我是B组件</h1>
                <h4>从Context组件接受到的用户名是：{ this.context.username }</h4>
                <C/>
            </div>
        )
    }
}

// class C extends Component{
//     static contextType = MyContext
//     render(){
//         console.log(this.context);
//         return(
//             <div>
//                 <h1>我是C组件</h1>
//                 <h4>从Context组件接受到的用户名是：{ this.context.username }</h4>
//             </div>
//         )
//     }
// }

function C (){
    return (
        <div>
            <h1>我是C组件</h1>
            <h4>从Context组件接受到的用户名是：
                <Consumer>
                    {
                        value =>{
                            return `${value.username},age是${value.age}`
                        }
                    }
                </Consumer>
            </h4>
        </div>
    )
}

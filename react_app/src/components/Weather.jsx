import React ,{ Fragment,useState,useEffect , useRef }from 'react'

export default function Weather() {
    const [weatherState,setWeatherState] = useState('凉爽')
    const [count,setCount] = useState(0)

    const changWeather = ()=>{
        setWeatherState(state => state = '炎热')
    }

    const showMessage = ()=>{
        alert(inputRef.current.value)
    }

    const inputRef = useRef()

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count => count + 1 )
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])
    
  return (
    <Fragment>
        <input type="text" ref={inputRef}/>
        <h1>今天天气很{weatherState}！,求和值为{count}</h1>
        <button onClick={changWeather}>点我改变状态</button>
        <button onClick={showMessage}>点我提示数据信息</button>
    </Fragment>
  )
}

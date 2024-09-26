import { ADD , SUBTRACTION } from './constant'

const initState = 0
function countReducer(preState=initState,action){
    const { type,data } = action
    switch (type) {
        case ADD:
            return preState + data
        case SUBTRACTION:
            return preState - data
        default:
            return preState
     
    }
}
export default countReducer;
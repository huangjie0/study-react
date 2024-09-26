import { ADD_PERSON } from '../constant'

const initState = [{
    id:'001',
    name:'黄杰',
    age:18
}]

function personReducer(preState = initState,action){
    const { type,data } = action
    switch (type) {
        case ADD_PERSON:
           return [data,...preState]
        default:
            return preState;
    }
}
export default personReducer;
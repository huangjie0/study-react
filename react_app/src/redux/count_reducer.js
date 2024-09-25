const initState = 0
function countReducer(preState=initState,action){
    const { type,data } = action
    switch (type) {
        case 'add':
            return preState + data
        case 'subtraction':
            return preState - data
        default:
            return preState
     
    }
}
export default countReducer;
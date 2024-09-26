import { ADD, SUBTRACTION } from './constant'
import store from './store'

export function createAddAction(data){
    return {
        type:ADD,
        data
    }
}

export function createAsyncAddAction(data,time){
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createAddAction(data))
        },time)
    }
}

export function createSubtractionAction(data){
    return {
        type:SUBTRACTION,
        data
    }
}


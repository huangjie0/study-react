import { ADD_PERSON } from './../constant';

export function createAddPersonAction(data){
    return {
        type:ADD_PERSON,
        data
    }
}
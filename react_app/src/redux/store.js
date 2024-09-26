import { createStore , applyMiddleware , combineReducers } from 'redux'
import countReducer from '../redux/reducers/count';
import personReducer from '../redux/reducers/person';
import {thunk} from 'redux-thunk'

const allReducer = combineReducers({
    summation:countReducer,
    showPerson:personReducer
})

const store = createStore(allReducer,applyMiddleware(thunk))

export default store;
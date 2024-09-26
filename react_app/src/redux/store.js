import { createStore , applyMiddleware } from 'redux'
import countReducer from './count_reducer';
import {thunk} from 'redux-thunk'

const store = createStore(countReducer,applyMiddleware(thunk))

export default store;
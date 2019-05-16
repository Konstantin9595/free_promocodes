import { combineReducers } from 'redux'
import fetchDataReducer from './fetchDataReducer'

const rootReducer = combineReducers({
    store: fetchDataReducer,
})

export default rootReducer
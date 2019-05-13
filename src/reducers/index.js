import { combineReducers } from 'redux'
import fetchServices from './fetchData'

const rootReducer = combineReducers({
    data: fetchServices
})

export default rootReducer
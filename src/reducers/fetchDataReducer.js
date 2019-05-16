import TestData from '../services/data'
import { FETCH_DATA_ACTION } from '../actions/fetchDataAction'
import { SEARCH_DATA_ACTION } from '../actions/searchDataAction'

// select * from services
const initialData = new TestData().fetchData()

// reducer отвечающий за выборку данных. (состоит из набора событий [Напр: все данные, данные по ключевому слову, по id и тд...])
const fetchDataReducer = (state = initialData, action) => {
    switch(action.type) {
        case FETCH_DATA_ACTION:
            return state
        case SEARCH_DATA_ACTION:
            return state
        default:
            return state.bonuses
    }
}

export default fetchDataReducer
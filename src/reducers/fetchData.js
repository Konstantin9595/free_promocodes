import * as types from '../actions/actionTypes'
import TestData from '../services/data'

// select * from services
const initialData = new TestData().fetchData()

// reducer отвечающий за выборку данных. (состоит из набора событий [Напр: все данные, данные по ключевому слову, по id и тд...])
const fetchData = (state = initialData, action) => {
    switch(action.type) {
        case types.FETCH_ALL_DATA:
            return state.bonuses
        default:
            return state
    }
}

export default fetchData
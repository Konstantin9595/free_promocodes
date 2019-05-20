import TestData from '../services/data'
import { SEARCH_DATA_ACTION } from '../actions/searchDataAction'

// select * from services
const initialData = new TestData().fetchData()

const fetchDataReducer = (state = initialData, action) => {
    switch(action.type) {
        case SEARCH_DATA_ACTION:
            const searchData = (action.payload ? action.payload : null)
            let newState = initialData.bonuses.filter(content => content.title.indexOf(searchData) !== -1)

            if(!newState.length) {
                newState = initialData.bonuses
            }
            return {
                ...state,
                bonuses: newState
            }

        default:
            return {
                ...state
            }
    }
}

export default fetchDataReducer
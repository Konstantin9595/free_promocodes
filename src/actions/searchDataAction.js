export const SEARCH_DATA_ACTION = "SEARCH_DATA_ACTION"

export const searchDataAction = (name = null) => {
    return {
        type: SEARCH_DATA_ACTION,
        payload: name
    }
}

// export const getRemoteNames = (name = null) => {
//     return dispatch => {
//
//         dispatch({
//             type: GET_REMOTE_NAMES
//         })
//
//         setTimeout(() => {
//             dispatch({
//                 type: GET_REMOTE_NAMES_SUCCESS,
//                 payload: name
//             })
//         }, 3000)
//
//     }
// }
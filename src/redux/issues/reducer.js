import * as types from './types'

const initialState = {
    list: [],
    isFetching: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ISSUES_UPDATE_LIST:
            return {
                ...state,
                list: action.list
            }

        case types.ISSUES_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        default:
            return state
    }
}
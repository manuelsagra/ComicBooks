import * as types from './types'

const initialState = {
    list: [],
    issue: null,
    total: 0,
    isFetching: false,
    offset: 0
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ISSUES_UPDATE_LIST:
            return {
                ...state,
                list: action.list,
                total: action.total
            }

        case types.ISSUES_UPDATE_ISSUE:
            return {
                ...state,
                issue: action.issue
            }

        case types.ISSUES_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        case types.ISSUES_UPDATE_OFFSET:
            return {
                ...state,
                offset: action.value
            }

        default:
            return state
    }
}
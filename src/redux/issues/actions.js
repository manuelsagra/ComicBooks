import * as types from './types'
import * as api from '../../webservices'

function updateIssuesList(list) {
    return {
        type: types.ISSUES_UPDATE_LIST,
        list
    }
}

export function fetchIssuesList() {
    return function(dispatch, getState) {
        api.fetchIssues()
            .then(res => {
                const list = res.data.results
                dispatch(updateIssuesList(list))
            })
            .catch(err => {
                console.error('fetchIssues err: ', err)
            })
    }
}
import * as types from './types'
import * as api from '../../webservices'
import { Actions } from 'react-native-router-flux'
import { Linking } from 'react-native'

const LIMIT = 10

function updateList(list, total) {
    return {
        type: types.ISSUES_UPDATE_LIST,
        list,
        total
    }
}

function updateIssue(issue) {
    return {
        type: types.ISSUES_UPDATE_ISSUE,
        issue
    }
}

function updateFetching(value) {
    return {
        type: types.ISSUES_UPDATE_FETCHING,
        value
    }
}

function updateOffset(value) {
    return {
        type: types.ISSUES_UPDATE_OFFSET,
        value
    }
}

export function initIssuesList() {
    return function(dispatch, getState) {
        dispatch(updateList([], 0))
        dispatch(updateOffset(0))
        dispatch(fetchIssuesList())
    }
}

export function updateIssuesListOffset() {
    return function(dispatch, getState) {
        const offset = getState().issues.offset + LIMIT
        dispatch(updateOffset(offset))
        dispatch(fetchIssuesList())
    }
}

export function fetchIssuesList() {
    return function(dispatch, getState) {
        dispatch(updateFetching(true))

        const { offset, list } = getState().issues
        const params = {
            offset,
            limit: LIMIT
        }

        api.fetchIssues(params)
            .then(res => {
                const newList = [...list, ...res.data.results]
                const total = res.data.number_of_total_results
                dispatch(updateList(newList, total))
            })
            .catch(err => {
                console.error('fetchIssues err: ', err)
            })
            .finally(_ => 
                dispatch(updateFetching(false))    
            )
    }
}

export function fetchIssue(id) {
    return function(dispatch, getState) {
        dispatch(updateFetching(true))

        api.fetchIssue(id)
            .then(res => {
                const issue = res.data.results
                dispatch(updateIssue(issue))
            })
            .catch(err => {
                console.error('fetchIssue err: ', err)
            })
            .finally(_ => 
                dispatch(updateFetching(false))    
            )
    }
}

export function shareIssue(data) {
    return function(dispatch, getState) {
        const url = `mailto:${data.to}?subject=${data.subject}&body=${data.text}`
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url)
            } else {
                console.log('Cannot send email!')
            }
        })
        Actions.pop()
    }
}
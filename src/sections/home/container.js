import { connect } from 'react-redux'
import View from './view'
import * as IssuesActions from '../../redux/issues/actions'

const mapStateToProps = state => {
    return {
        issuesList: state.issues.list,
        issuesTotal: state.issues.total,
        isFetching: state.issues.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        initIssuesList: () => {
            dispatch(IssuesActions.initIssuesList())
        },
        updateIssuesListOffset: () => {
            dispatch(IssuesActions.updateIssuesListOffset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
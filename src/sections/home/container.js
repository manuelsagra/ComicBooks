import { connect } from 'react-redux'
import View from './view'
import * as IssuesActions from '../../redux/issues/actions'

const mapStateToProps = state => {
    return {
        issuesList: state.issues.list,
        isFetching: state.issues.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getIssuesList: () => {
            dispatch(IssuesActions.fetchIssuesList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
import { connect } from 'react-redux'
import View from './view'
import * as IssuesActions from '../../redux/issues/actions'

const mapStateToProps = state => {
    return {
        issue: state.issues.issue,
        isFetching: state.issues.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getIssue: (id) => {
            dispatch(IssuesActions.fetchIssue(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
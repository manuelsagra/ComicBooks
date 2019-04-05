import { connect } from 'react-redux'
import View from './view'
import * as IssuesActions from '../../redux/issues/actions'

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmit: (data) => {
            dispatch(IssuesActions.shareIssue(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
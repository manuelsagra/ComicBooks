import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default class IssueCell extends React.Component {
    static defaultProps = {
        issue: {},
        onPress: () => {}
    }

    _onCellTapped = () => {
        const { issue } = this.props
        this.props.onPress(issue)
    }

    render() {
        const { issue } = this.props
        const source = issue && issue.image.small_url ? { uri: issue.image.small_url } : null
        return (
            <TouchableOpacity
                onPress={() => this._onCellTapped()}
                style={styles.cell}
            >
                <Image source={source} style={styles.image} />
            </TouchableOpacity>
        )
    }
}

import React from 'react'
import { SafeAreaView, FlatList, Text } from 'react-native'
import styles from './styles'
//import { Actions } from 'react-native-router-flux'
import * as api from '../../webservices'
import { IssueCell } from '../../widgets'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { issuesList: [] }
        this._fetchIssuesList()
    }

    _fetchIssuesList() {
        api
            .fetchIssues()
            .then(res => {
                this.setState({ issuesList: res.data.results })
            })
            .catch(err => {
                console.error("fetchIssues err: ", err)
            })
    }

    _onIssueTapped = issue => {
        alert("_onIssueTapped")
    }

    _keyExtractor = (item, index) => `${item.id}`

    _renderItem = ({ item, index }) => (
        <IssueCell issue={item} onPress={issue => this._onIssueTapped(issue)} />
    )

    render() {
        const { issuesList } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={issuesList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={2}
                />
            </SafeAreaView>
        )
    }
}


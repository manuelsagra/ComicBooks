import React from 'react'
import { SafeAreaView, View, FlatList, RefreshControl, Text, ActivityIndicator } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './styles'
import * as colors from '../../commons/colors'
//import { Actions } from 'react-native-router-flux'
import * as api from '../../webservices'
import { IssueCell } from '../../widgets'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        props.initIssuesList()
    }

    _keyExtractor = (item, index) => `${item.id}`

    _onEndReached = ({ distanceFromEnd }) => {
        const { issuesList, issuesTotal, isFetching } = this.props
        if (
            distanceFromEnd > 100 &&
            !isFetching &&
            issuesList.length &&
            issuesList.length < issuesTotal
        ) {
            this.props.updateIssuesListOffset()
        }
    }

    _onIssueTapped = issue => {
        alert("_onIssueTapped")
    }

    _renderItem = ({ item, index }) => (
        <IssueCell 
            issue={item} 
            onPress={issue => this._onIssueTapped(issue)} 
        />
    )

    _renderFooter = (isFetching) => {
        if (isFetching) {
            return (
                <View style={styles.loading}>
                    <Spinner color={colors.white} size={40} type={'Wave'} />
                </View>
            )
        }
        return null 
    }

    _renderNoResultsText = () => {
        const { isFetching } = this.props
        if (isFetching) {
            return null
        }
        return (
            <Text style = {styles.noResultsText}>No hay resultados</Text>
        )
    }

    render() {
        const { issuesList, isFetching } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={issuesList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={2}
                    ListEmptyComponent={this._renderNoResultsText}
                    ListFooterComponent={_ => this._renderFooter(isFetching)}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.8}
                    refreshControl={
                        <RefreshControl
                            onRefresh={this.props.getIssuesList}
                            refreshing={isFetching}
                            tintColor={colors.white}
                            colors={[colors.white]}
                        />
                    }
                />
            </SafeAreaView>
        )
    }
}


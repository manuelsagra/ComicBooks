import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './styles'
import * as colors from '../../commons/colors'

export default class Issue extends React.Component {
    constructor(props) {
        super(props)
        props.getIssue(props.id)
    }

    render() {
        const { issue, isFetching } = this.props

        if (isFetching) {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.loading}>
                        <Spinner color={colors.white} size={40} type={'Wave'} />
                    </View>
                </SafeAreaView>
            )
        }

        if (issue) {
            return (
                <SafeAreaView style={styles.container}>
                    <Text>{issue.name}</Text>
                </SafeAreaView>
            )
        }
        
        return (
            <SafeAreaView style={styles.container}></SafeAreaView>
        )
    }
}


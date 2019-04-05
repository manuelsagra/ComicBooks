import React from 'react'
import { SafeAreaView, View, Text, Image, ScrollView, Linking } from 'react-native'
import HTML from 'react-native-render-html'
import Spinner from 'react-native-spinkit'
import { Button } from '../../widgets'

import styles from './styles'
import * as colors from '../../commons/colors'
import _ from 'lodash'

export default class Issue extends React.Component {
    constructor(props) {
        super(props)
        props.getIssue(props.id)
    }

    _handleClick = () => {
        const { issue } = this.props
        const url = _.get(issue, 'site_detail_url', null)
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url)
            }
        })
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
            const imageUrl = _.get(issue, 'image.medium_url', null)
            const volume = _.get(issue, 'volume.name', '-')
            const number = _.get(issue, 'issue_number', '-')
            const date = _.get(issue, 'store_date', '-')
            const description = _.get(issue, 'description', '-')            

            return (
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.issueDetails}>
                        <Image style={styles.issueImage} source={{ uri: imageUrl }} />                    
                        <View style={styles.issueData}>
                            <Text style={styles.issueDataName}>{'Volumen'}</Text>
                            <Text style={styles.issueDataValue}>{volume}</Text>
                        </View>
                        <View style={styles.issueData}>
                            <Text style={styles.issueDataName}>{'Número'}</Text>
                            <Text style={styles.issueDataValue}>{number}</Text>
                        </View>
                        <View style={styles.issueData}>
                            <Text style={styles.issueDataName}>{'Fecha de publicación'}</Text>
                            <Text style={styles.issueDataValue}>{date}</Text>
                        </View>
                        {
                            description &&
                            <View style={styles.issueData}>
                                <Text style={styles.issueDataName}>{'Descripción'}</Text>
                                <HTML html={description} />
                            </View>
                        }
                    </ScrollView>    
                    <View style={styles.issueButtons}>
                        <Button label={'Ver ficha en ComicVine'} onPress={this._handleClick} />
                    </View>     
                </SafeAreaView>
            )
        }
        
        return (
            <SafeAreaView style={styles.container}></SafeAreaView>
        )
    }
}


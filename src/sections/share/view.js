import React from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { Input, Button } from '../../widgets'

import styles from './styles'
import * as colors from '../../commons/colors'
import _ from 'lodash'

export default class Issue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            to: '',
            subject: this.props.subject,
            text: `¡Mira este cómic!\n\n${props.issue.site_detail_url}`
        }
    }

    _onSubmit = () => {
        const data = {
            to: this.state.to,
            subject: this.state.subject,
            text: this.state.text
        }
        this.props.onSubmit(data)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.shareForm}>
                    <Input
                        label={'Para'}
                        value={this.state.to}
                        placeholder={'Correo electrónico'}
                        onChangeText={to => this.setState({ to })}
                    />
                    <Input
                        label={'Asunto'}
                        value={this.state.subject}
                        onChangeText={subject => this.setState({ subject })}
                    />
                    <Input
                        label={'Cuerpo'}
                        value={this.state.text}
                        inputStyle={{ height: 300 }}
                        multiline={true}
                        onChangeText={text => this.setState({ text })}
                    />
                </ScrollView>
                <View style={styles.shareButtons}>
                    <Button label={'Enviar'} onPress={this._onSubmit} />
                </View>
            </SafeAreaView>
        )
    }
}


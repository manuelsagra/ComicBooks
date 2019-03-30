import React from 'react'
import { Stack, Router, Scene } from 'react-native-router-flux'
import { Home } from './sections'
import { configureAxios } from './webservices'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        configureAxios()
    }

    render() {
        return (
            <Router>
                <Stack key={'root'}>
                    <Scene key={'Home'} component={Home} title={'Cómics'} initial />
                </Stack>
            </Router>
        )
    }
}
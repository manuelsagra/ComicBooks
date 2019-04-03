import React from 'react'
import { Stack, Router, Scene } from 'react-native-router-flux'
import { Home, Issue } from './sections'
import { configureAxios } from './webservices'
import * as colors from './commons/colors'
import { store } from './config/redux'
import { Provider } from 'react-redux'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        configureAxios()
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key={'root'}>
                        <Scene key={'Home'} component={Home} title={'Cómics'} initial />
                        <Scene key={'Issue'} component={Issue} title={'Cómic'} />
                    </Stack>
                </Router>
            </Provider>
        )
    }
}

const navBarStyles = {
    navigationBarStyle: {
        backgroundColor: colors.navBar
    },
    titleStyle: {
        color: colors.white
    },
    backButtonTextStyle: {
        color: colors.white
    },
    backButtonTintStyle: {
        color: colors.white
    }
}
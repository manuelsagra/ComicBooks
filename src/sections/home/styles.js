import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 100
    },
    noResultsText: {
        textAlign: 'center',
        margin: 20,
        fontSize: 18,
        color: colors.white
    }
})
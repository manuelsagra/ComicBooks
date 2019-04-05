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
    issueImage: {
        width: '100%',
        backgroundColor: '#111',
        height: 300,
        resizeMode: 'contain'
    },
    issueDetails: {
        backgroundColor: colors.white
    },
    issueData: {        
        paddingHorizontal: 20,
        marginVertical: 10
    },
    issueDataName: {
        fontSize: 14,
        color: '#666'
    },
    issueDataValue: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    issueDescription: {
        width: '100%',
        height: 200
    },
    issueDataLink: {
        fontSize: 16,
        color: '#369'
    },
    issueButtons: {
        backgroundColor: colors.white,
        paddingHorizontal: 20
    }
})
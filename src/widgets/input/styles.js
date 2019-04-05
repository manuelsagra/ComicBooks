import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    container: {
        marginVertical: 10 
    },
    label: {
        color: colors.main,
        marginBottom: 4
    },
    input: {
        color: colors.main,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.main,
        backgroundColor: colors.white,
        padding: 4,
        textAlignVertical: 'top'
    },
    error: {
        color: colors.error,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5
    }
})
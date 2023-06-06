import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: sizes.small,
    },
    apiContainer: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    usernameContainer: {},
    username: {
        fontSize: sizes.xxlarge
    },
    introContainer: {},
    introText: {
        fontSize: sizes.large,
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: '300',
        lineHeight: sizes.large*2,
        color: colors.black
    },
    activityContainer: {
        marginBottom: sizes.large*4
    },
    activity: {
        fontSize: sizes.large,
        lineHeight: sizes.xxlarge,
        textAlign: 'center'
    }, 
    followUpContainer: {},
    followUpText: {
        textAlign: 'center',
        fontSize: sizes.small,
        lineHeight: sizes.xxlarge
    }
});
import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: sizes.small,
        paddingTop: sizes.xxlarge,
        backgroundColor: colors.white
    },
    usernameContainer: {
        alignSelf: 'center',
        padding: sizes.medium,
        marginBottom: sizes.small
    },
    username: {
        fontSize: sizes.xxlarge
    },
    introContainer: {
        marginBottom: sizes.xxlarge
    },
    introText: {
        fontSize: sizes.xlarge,
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: '300',
        lineHeight: sizes.large*2,
        color: colors.black
    },
    activityContainer: {
        borderWidth: 1,
        marginTop: sizes.xxlarge*2
    },
    activity: {
        fontSize: sizes.large,
        lineHeight: sizes.xxlarge,
        textAlign: 'center'
    }, 
    followUpContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginBottom: sizes.xxlarge
    },
    followUpText: {
        textAlign: 'center',
        fontSize: sizes.small,
        lineHeight: sizes.xxlarge
    }
});
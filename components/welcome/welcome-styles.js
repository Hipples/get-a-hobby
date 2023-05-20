import { StyleSheet } from 'react-native';

import { colors, shadows, highlights, sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
    // overall background
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    // just the logo
    logoContainer: {
        flex: 3,
        backgroundColor: colors.gray,
        marginTop: sizes.xxlarge,
        paddingTop: sizes.medium,
        borderColor: colors.tertiary,
        borderTopWidth: sizes.xxsmall,
        borderBottomWidth: sizes.xxsmall
    },
    logo: {
        flex: 1,
        tintColor: colors.black,
        objectFit: 'fill'
    },
    // from 'Welcome' to 'you!'
    messageContainer: {
        flex: 3,
        margin: sizes.small,
    },
    message: {
        color: colors.black,
        fontSize: (sizes.medium+sizes.large)/2,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    heading: {
        fontSize: sizes.xxlarge,
        fontStyle: 'normal',
        color: colors.primary,
    },
    title: {
        fontSize: sizes.large*2,
    },
    // get started button
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        height: sizes.large*3,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 100,
        borderColor: colors.tertiary,
        elevation: 3,
        shadowColor: shadows.primary,
    },
    default: {
        backgroundColor: colors.primary
    },
    pressed: {
        backgroundColor: shadows.primary
    },
    buttonText: {
        color: colors.white,
        fontSize: sizes.large,
    }
});
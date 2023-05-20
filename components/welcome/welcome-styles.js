import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, shadows, highlights, sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
    // overall background
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.gray,
    },
    // just the logo
    logoContainer: {
        flex: 3,
        paddingTop: sizes.xxlarge,
        opacity: 0.9,
        margin: sizes.xxlarge
    },
    logo: {
        flex: 1,
        tintColor: colors.black,
        objectFit: 'fill'
    },
    // from 'Welcome' to 'you!'
    messageContainer: {
        flex: 2,
    },
    message: {
        color: colors.black,
        fontSize: sizes.medium,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    heading: {
        fontSize: sizes.xlarge,
        fontStyle: 'normal',
        fontWeight: '300',
        color: colors.primary,
    },
    title: {
        fontSize: sizes.xxlarge,
    },
    // get started button
    buttonContainer: {
        flex: .75,
        justifyContent: 'center',
    },
    button: {
        height: sizes.large*2,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 100,
        borderColor: colors.tertiary,
        elevation: 3,
        shadowColor: shadows.tertiary,
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

export const LogoGradient = (props) => (
    <LinearGradient 
    colors={['#ff8800', colors.primary, colors.secondary, colors.tertiary]}
    locations={[0, .2, .45, .85]}
    style={styles.logoContainer}>{props.children}</LinearGradient>
);
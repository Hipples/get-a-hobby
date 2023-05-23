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
        color: colors.white,
        fontSize: sizes.medium,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    heading: {
        fontSize: sizes.xlarge,
        fontStyle: 'normal',
        fontWeight: '300',
    },
    title: {
        fontSize: sizes.xxlarge,
        lineHeight: sizes.large*2
    },
    // get started button
    buttonContainer: {
        marginTop: sizes.xxlarge,
        marginBottom: sizes.large,
        justifyContent: 'center',
        alignItems: 'center',
        // container applies 4pt gradient border around button
        width: 179,
        height: sizes.large*2+4,
        borderRadius: 100
    },
    button: {
        height: sizes.large*2,
        width: 175,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        elevation: 3
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

export const WelcomeGradient = (props) => (
    <LinearGradient 
    colors={[colors.quaternary, colors.primary, colors.secondary, colors.tertiary]}
    locations={[0, .175, .375, .6]}
    style={styles.container}>{props.children}</LinearGradient>
);

export const ButtonBorderGradient = (props) => (
    <LinearGradient 
        colors={[colors.quaternary, highlights.primary, colors.secondary, highlights.tertiary]}
        start={[0, 1]} end={[1, 1]}
        style={styles.buttonContainer}
         >{props.children}
    </LinearGradient>
);
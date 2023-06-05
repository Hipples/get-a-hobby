import { StyleSheet } from 'react-native';
import { LinearGradient  } from 'expo-linear-gradient';

import { colors, sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: sizes.small,
        paddingTop: sizes.xxlarge,
        backgroundColor: colors.white
    },
    introContainer: {
        marginBottom: sizes.xxlarge
    },
    introText: {
        fontSize: sizes.xxlarge,
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: '300',
        lineHeight: sizes.large*2,
        color: colors.black
    },
    activityContainer: {
        marginTop: sizes.xxlarge*2
    },
    activity: {
        fontSize: sizes.medium,
        lineHeight: sizes.xxlarge,
        fontWeight: '300',
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

export const HomeGradient = (props) => (
    <LinearGradient 
        colors={[ colors.white, colors.gray ]}
        locations={[.35, .9]}
        style={styles.container}>
            {props.children}
    </LinearGradient>
);
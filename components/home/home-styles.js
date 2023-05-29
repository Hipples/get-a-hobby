import { StyleSheet } from 'react-native';

import { colors, highlights, shadows, sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: sizes.xxlarge*2,
        paddingHorizontal: sizes.small,
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
        color: colors.black,
        textShadowRadius: 2,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: shadows.tertiary
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
import { StyleSheet } from "react-native";

import { colors, shadows, sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
    buttonContainer: {
        flexBasis: 150,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    hobbyContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    hobbyText: {
        fontSize: sizes.xlarge*2,
        fontWeight: '500',
        color: colors.white,
        opacity: 1,
        textShadowRadius: 2,
        textShadowOffset: { width: 3, height: 3 },
        textShadowColor: shadows.tertiary
    }
});
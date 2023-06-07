import { Dimensions, StyleSheet } from "react-native";

import { colors, highlights, shadows, sizes } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
// main background for Settings page
    container: {
        flexGrow: 1,
        paddingTop: sizes.xxlarge,
        justifyContent: 'space-between'
    },
// styles for user greeting & prompt on Settings page
    greetingContainer: {
        marginBottom: sizes.xxlarge,
        paddingHorizontal: sizes.small
    },
    greetingText: {
        color: colors.black,
        fontSize: sizes.xxlarge,
        fontWeight: '300',
        marginBottom: sizes.xxlarge
    },
    greetingPrompt: {
        color: colors.black,
        fontSize: sizes.xlarge,
        fontWeight: '300',
    },
    // common styles for the options displayed in Settings
    optionsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    option: {
        borderWidth: 2,
        borderRadius: sizes.small,
        borderColor: colors.black,
        elevation: 3,
        marginVertical: sizes.small,
        marginHorizontal: sizes.small,
        padding: sizes.medium,
    },
    optionText: {
        color: colors.black,
        fontSize: sizes.large,
        fontWeight: '500'
    },
    // specific colors for the options in Settings
    editName: {
        backgroundColor: colors.secondary
    },
    deleteUser: {
        backgroundColor: shadows.quaternary
    },
    goHome: {
        backgroundColor: highlights.tertiary
    },
    // styles for EditName pop-up
    editNamePrompt: {
        fontSize: sizes.large,
        color: colors.black
    },
    editNameInput: {
        flexBasis: sizes.large*3,
        width: screenWidth-50,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRadius: sizes.small,
        padding: sizes.medium,
        fontSize: sizes.medium,
        fontWeight: '300',
        color: colors.black
    },
    // styles for CreateUser pop-up
    loginPrompt: {
        fontSize: sizes.large,
        color: colors.black,
    },
    loginInput: {
        flexBasis: sizes.large*3,
        width: screenWidth-50,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRadius: sizes.small,
        padding: sizes.medium,
        fontSize: sizes.medium,
        fontWeight: '300',
        color: colors.black,
    },
    // styles for RatingInfo popup on hobby pages
    ratingInfo: {
        flexBasis: 300,
        backgroundColor: colors.white
    },
    ratingInfoHeader: {
        marginBottom: 20, 
        textAlign: 'center', 
        fontSize: sizes.large
    },
    ratingItemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 30
    },
    ratingItemText: {
        flex: 1,
        fontSize: sizes.medium,
        fontWeight: '300'
    },
    // common styles
    popupContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup: {
        flexBasis: 250,
        width: screenWidth-20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: sizes.small,
        borderWidth: 1,
        borderRadius: sizes.large,
        elevation: 5
    },
    buttonsContainer: {
        flexDirection: 'row', 
        columnGap: 10,
        width: screenWidth-50,
        justifyContent: 'flex-end',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.xlarge*3.5,
        padding: sizes.xsmall,
        borderRadius: sizes.xsmall,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        elevation: 2,
        shadowColor: shadows.black
    },
    buttonText: {
        color: colors.white,
        fontSize: sizes.medium,
        fontWeight: '500',
        textShadowColor: colors.black,
        textShadowRadius: 1,
        textShadowOffset: { height: 1, width: -1 }
    },  
    continue: {
       backgroundColor: colors.primary
    },
    cancel: {
       backgroundColor: shadows.quaternary
    },
});

export const SettingsBackground = ({ children }) => (
    <LinearGradient
        colors={[ colors.white, colors.gray ]}
        locations={[.35, .9]}
        style={styles.container}>{children}
        <LinearGradient
            colors={[colors.quaternary, highlights.primary, colors.secondary, highlights.tertiary]}
            start={[0, 1]} end={[1, 1]}
            style={{height: 3}} />
    </LinearGradient>
);

export const PopupBackground = ({ children }) => (
    <LinearGradient
    colors={[ colors.gray, colors.white ]}
    locations={[.1, .65]}
    style={styles.popup}>{children}</LinearGradient>
);
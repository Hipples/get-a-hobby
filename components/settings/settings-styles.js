import { Dimensions, StyleSheet } from "react-native";

import { colors, shadows, sizes } from "../../constants/theme";

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    loginPage: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    loginContainer: {
      flexBasis: sizes.large*10,
      width: screenWidth-20,
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: sizes.medium, 
      backgroundColor: colors.gray,
      opacity: .9,
      borderColor: colors.tertiary,
      borderWidth: 1,
      borderRadius: sizes.medium,
      elevation: 10,
      shadowColor: shadows.black
    },
    loginPrompt: {
      fontSize: sizes.large,
      color: colors.black,
      fontWeight: '500'
    },
    userInput: {
      fontSize: sizes.large,
      flexBasis: 75,
      padding: sizes.small,
      width: screenWidth-50,
      borderWidth: 1
    },
    buttonsContainer: {
      flexDirection: 'row', 
      marginTop: 10,
      columnGap: 10,
      width: screenWidth-50,
      justifyContent: 'flex-end',
    },
    button: {
      borderWidth: 1,
      flexShrink: 1,
      width: 20
    },
    continue: {
      padding: sizes.xsmall
    },
    goBack: {
      padding: sizes.small
    },
    deleteUserButtonContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    deleteUserButton: {
        borderWidth: 2,
        borderRadius: 20,
        height: 100,
        width: 200
    },
    deleteUserButtonLabel: {
        fontSize: 20
    }
});
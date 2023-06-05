import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
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
    },
    loginContainer: {
        flexBasis: 300,
        width: screenWidth-20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20, 
        borderRadius: 20
      },
      loginText: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10
      },
      userInput: {
        flexBasis: 100,
        fontSize: 50,
        padding: 10,
        width: screenWidth-50,
        backgroundColor: 'aliceblue',
        borderWidth: 1
      },
      buttonsContainer: {
        flexDirection: 'row', 
        marginTop: 10,
        columnGap: 10,
        width: screenWidth-50,
        justifyContent: 'flex-end',
      },
      continueButton: {},
      goBackButton: {},
      loginPage: {flex: 1, justifyContent: 'center', alignItems: 'center'}
});
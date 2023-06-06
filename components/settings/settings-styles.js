import { Dimensions, StyleSheet } from "react-native";

import { colors, highlights, shadows, sizes } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  // main background for Settings page
  container: {
    flexGrow: 1,
    padding: sizes.xxsmall,
  },
  // styles for user greeting & prompt on Settings page
  greetingContainer: {},
  greetingText: {
    fontSize: sizes.xxlarge,
    fontWeight: '300',
    marginBottom: sizes.small
  },
  greetingPrompt: {
    fontSize: sizes.large,
    fontWeight: '300',
    marginBottom: sizes.small
  },
  settingsButton: {

  },
  settingsButtonText: {

  },
  // styles for creating a new user (welcome page pop-up)
  createUser: {
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
    backgroundColor: highlights.gray,
    opacity: .95,
    borderColor: colors.secondary,
    borderWidth: 3,
    borderRadius: sizes.medium,
    elevation: 5,
    shadowColor: shadows.secondary
  },
  loginPrompt: {
    fontSize: sizes.large,
    color: colors.black,
  },
  userInput: {
    flexBasis: 75,
    width: screenWidth-50,
    padding: sizes.small,
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: sizes.small,
    fontSize: sizes.large,
    backgroundColor: colors.white,
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
  continue: {
    backgroundColor: colors.primary
  },
  cancel: {
    backgroundColor: shadows.quaternary
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.medium,
    fontWeight: '500',
    textShadowColor: colors.black,
    textShadowRadius: 1,
    textShadowOffset: { height: 1, width: -1 }
  },
  // styles for Change Username pop-up
  modalContainer: {
    flexBasis: 500,
    width: screenWidth-20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white'
  },
});

export const SettingsBackground = ({ children }) => (
  <LinearGradient
  colors={[ colors.white, colors.gray ]}
  locations={[.35, .9]}
  style={styles.container}>{children}</LinearGradient>
);
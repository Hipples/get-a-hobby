import { Dimensions, StyleSheet } from "react-native";

import { colors, highlights, shadows, sizes } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  // main background for Settings page
  container: {
    flexGrow: 1,
    paddingTop: sizes.xxlarge,
    paddingHorizontal: sizes.xxsmall,
    justifyContent: 'flex-start'
  },
  // styles for user greeting & prompt on Settings page
  greetingContainer: {
    marginBottom: sizes.xxlarge
  },
  greetingText: {
    fontSize: sizes.xxlarge,
    fontWeight: '300',
    marginBottom: sizes.xxlarge
  },
  greetingPrompt: {
    fontSize: sizes.xlarge,
    fontWeight: '300',
  },
  settingsButton: {
    borderWidth: 1,
    elevation: 5,
    marginVertical: sizes.small,
    padding: sizes.medium,
  },
  settingsButtonText: {
    fontSize: sizes.large
  },
  editName: {
    backgroundColor: colors.secondary
  },
  deleteUser: {
    backgroundColor: shadows.quaternary
  },
  goBackHome: {
    backgroundColor: colors.tertiary
  },
  // styles for Edit Name pop-up
  editNameContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editNamePopup: {
    flexBasis: 250,
    width: screenWidth-20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.small,
    borderWidth: 1,
    borderRadius: sizes.large
  },
  editNamePrompt: {
    fontSize: sizes.large
  },
  editNameInput: {
    flexBasis: sizes.large*3,
    width: screenWidth-50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRadius: sizes.small,
    padding: sizes.medium,
    fontSize: sizes.medium,
    fontWeight: '300'
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
  loginInput: {
    flexBasis: 75,
    width: screenWidth-50,
    padding: sizes.small,
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: sizes.small,
    fontSize: sizes.large,
    backgroundColor: colors.white,
  },
  continue: {
    backgroundColor: colors.primary
  },
  cancel: {
    backgroundColor: shadows.quaternary
  },
  // common styles
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



});

export const SettingsBackground = ({ children }) => (
  <LinearGradient
  colors={[ colors.white, colors.gray ]}
  locations={[.35, .9]}
  style={styles.container}>{children}</LinearGradient>
);

export const EditNameBackground = ({ children }) => (
  <LinearGradient
  colors={[ colors.gray, colors.white ]}
  locations={[.1, .65]}
  style={styles.editNamePopup}>{children}</LinearGradient>
);
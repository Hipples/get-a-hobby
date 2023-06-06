import { Text } from 'react-native';

import { SettingsBackground } from '../components/settings/settings-styles';

const AboutUs = () => (
    <SettingsBackground>
        <Text style={{paddingHorizontal: 10, lineHeight: 20}}>
            Thank you for checking out GetAHobby!
            {'\n\n'}
            We are a team of MSCS students from City University of Seattle. This app is a term project for CS 624: Full-Stack Development (Mobile Apps) in Spring of 2023.
            {'\n\n'}
            GetAHobby has been designed to demonstrate the development process of a React Native cross-platform mobile application. 
            {'\n\n'}
            GetAHobby demonstrates the following concepts:{'\n'}
            {'\t'}- Reuseable UI Components{'\n'}
            {'\t'}- React Native StyleSheet Designs{'\n'}
            {'\t'}- React Hooks (useState, useEffect, useContext, etc.){'\n'}
            {'\t'}- React Navigation (stacks, bottom-tabs, drawer){'\n'}
            {'\t'}- React Context{'\n'}
            {'\t'}- Fetch API (using Bored API){'\n'}
            {'\t'}- Async Storage (storing username){'\n'}
        </Text>
    </SettingsBackground>
);

export default AboutUs;
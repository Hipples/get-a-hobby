import { View, Text } from 'react-native';

const AboutUs = () => (
    <View>
        <Text>
            Welcome to GetAHobby!
            {'\n\n'}
            We are a team of MSCS students from City University of Seattle. This app is a term project for CS 624: Full-Stack Development (Mobile Apps) in Spring of 2023. GetAHobby has been designed to demonstrate the development process of a React Native cross-platform mobile application. 
            {'\n\n'}
            The following concepts are demonstrated in GetAHobby:{'\n'}
            - Reuseable Components{'\n'}
            - StyleSheet Designs{'\n'}
            - React Navigation{'\n'}
            - React Hooks{'\n'}
            - Networking{'\n'}
        </Text>
    </View>
);

export default AboutUs;
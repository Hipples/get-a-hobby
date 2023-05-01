import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import WelcomeMessage from '../components/welcome/welcome-message';
import GetStarted from '../components/welcome/get-started';

const logo = require('../assets/logo.png');

const Welcome = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                source={logo}
                resizeMode='contain'
                tintColor="#EDEDED" />
        </View>
        <WelcomeMessage />
        <GetStarted navigation={navigation} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555'
    },
    logoContainer: {
        marginRight: 25,
    }   
});

export default Welcome;
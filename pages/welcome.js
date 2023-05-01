import { View, StyleSheet } from 'react-native';

import DisplayLogo from '../components/welcome/display-logo';
import WelcomeMessage from '../components/welcome/welcome-message';
import GetStartedButton from '../components/welcome/get-started-button';

const Welcome = ({ navigation }) => (
    <View style={styles.container}>
        <DisplayLogo />
        <WelcomeMessage />
        <GetStartedButton navigation={navigation} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555'
    } 
});

export default Welcome;
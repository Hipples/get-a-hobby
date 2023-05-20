import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DisplayLogo from '../components/welcome/display-logo';
import WelcomeMessage from '../components/welcome/welcome-message';
import GetStartedButton from '../components/welcome/get-started-button';

import { styles } from '../components/welcome/welcome-styles';
import { colors } from '../constants/theme';

const Welcome = ({ navigation }) => (
    <View style={styles.container}>
        <StatusBar style='auto' backgroundColor={colors.gray}/>
        <DisplayLogo />
        <WelcomeMessage />
        <GetStartedButton navigation={navigation} />
    </View>
);

export default Welcome;
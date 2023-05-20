import { View } from 'react-native';

import DisplayLogo from '../components/welcome/display-logo';
import WelcomeMessage from '../components/welcome/welcome-message';
import GetStartedButton from '../components/welcome/get-started-button';

import { styles } from '../components/welcome/welcome-styles';

const Welcome = ({ navigation }) => (
    <View style={styles.container}>
        <DisplayLogo />
        <WelcomeMessage />
        <GetStartedButton navigation={navigation} />
    </View>
);

export default Welcome;
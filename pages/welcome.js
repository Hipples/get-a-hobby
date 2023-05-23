import { StatusBar } from 'expo-status-bar';

import DisplayLogo from '../components/welcome/display-logo';
import WelcomeMessage from '../components/welcome/welcome-message';
import GetStartedButton from '../components/welcome/get-started-button';

import { WelcomeGradient } from '../components/welcome/welcome-styles';

const Welcome = ({ navigation }) => (
    <WelcomeGradient>
        <StatusBar style='auto' />
        <DisplayLogo />
        <WelcomeMessage />
        <GetStartedButton navigation={navigation} />
    </WelcomeGradient>
);

export default Welcome;
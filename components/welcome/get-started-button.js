import { Pressable, Text } from 'react-native';

import { styles, ButtonBorderGradient } from './welcome-styles';

// button to go from welcome --> home screen
const GetStartedButton = ({ navigation }) => (
    <ButtonBorderGradient>
        <Pressable 
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.pressed : styles.default ]}
            onPress={() => navigation.navigate('New User')} >
            <Text style={styles.buttonText}>Get Started!</Text>
        </Pressable>
    </ButtonBorderGradient>
);

export default GetStartedButton;
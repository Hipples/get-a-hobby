import { Pressable, Text } from 'react-native';

import { styles, ButtonBorderGradient } from './welcome-styles';
import { useState } from 'react';

import NewUser from '../user-auth/new-user';

// button to go from welcome --> home screen
const GetStartedButton = () => {
    const [started, setStarted] = useState(false);

    const getStarted = () => {
        
    }

    return (
        <ButtonBorderGradient>
            <Pressable 
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.pressed : styles.default ]}
                onPress={getStarted()} >
                <Text style={styles.buttonText}>Get Started!</Text>
            </Pressable>
        </ButtonBorderGradient>
    );
}
export default GetStartedButton;
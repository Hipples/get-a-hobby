import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles, ButtonBorderGradient } from '../welcome/welcome-styles';

// button to display a random hobby page
const GetAHobbyButton = ( ) => {
    const navigation = useNavigation()
    const hobbies = ['Coding', 'Writing', 'Volleyball'];
   
    return (
        <ButtonBorderGradient>
            <Pressable 
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.pressed : styles.default ]}
                onPress={() => navigation.navigate('Explore Hobbies', {screen: hobbies[hobbies.length * Math.random() | 0]})} >
                <Text style={styles.buttonText}>Get A Hobby!</Text>
            </Pressable>
        </ButtonBorderGradient>
    );
}

export default GetAHobbyButton;
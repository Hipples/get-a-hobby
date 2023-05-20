import { View, Pressable, Text } from 'react-native';

import { styles } from './welcome-styles';

// button to go from welcome --> home screen
const GetStartedButton = ({ navigation }) => (
    <View style={styles.buttonContainer}>
        <Pressable 
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.pressed : styles.default ]}
            onPress={() => navigation.navigate('Home')} >
            <Text style={styles.buttonText}>Get Started!</Text>
        </Pressable>
    </View>
);

export default GetStartedButton;
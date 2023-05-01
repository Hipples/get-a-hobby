import { View, Pressable, Text, StyleSheet } from 'react-native';

//button to go from welcome --> home screen labeled with Get Started!
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

//styles currently focused toward android
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20
    },
    button: {
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 100,
        borderColor: '#337',
        elevation: 3,
        shadowColor: '#004',
    },
    pressed: {
        backgroundColor: '#999'
    },
    default: {
        backgroundColor: '#DDD'
    },
    buttonText: {
        color: '#337',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default GetStartedButton;
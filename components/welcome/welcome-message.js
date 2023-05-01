import { View, Text, StyleSheet } from 'react-native';

const WelcomeMessage = () => (
    <View style={styles.messageContainer}>
        <Text style={styles.message}>
            Welcome to GetAHobby! 
            {"\n\n"}
            Whether you're looking to relax, get creative,
            or learn something new, we've got you covered. 
            {"\n\n"}
            Let's explore and find the hobby for you!
        </Text>
    </View>
);

const styles = StyleSheet.create({
    messageContainer: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    message: {
        color: "#FFF",
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        textShadowColor: '#333',
        textShadowOffset: {
          height: 2, 
          width: 2
        },
        textShadowRadius: 1
    }
});

export default WelcomeMessage;
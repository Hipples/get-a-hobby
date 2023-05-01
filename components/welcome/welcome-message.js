import { View, Text, StyleSheet } from 'react-native';

const WelcomeMessage = () => (
    <View style={styles.messageContainer}>
        <Text style={styles.message}>
            <Text style={styles.heading}>Welcome to GetAHobby!{"\n\n"}</Text>
            Whether you're looking to relax, get creative,
            or learn something new, we've got you covered. 
            {"\n\n"}
            <Text style={{fontStyle: 'normal'}}>Get started finding the hobby for you!</Text>
        </Text>
    </View>
);

const styles = StyleSheet.create({
    messageContainer: {
        paddingHorizontal: 10,
        marginBottom: 20
    },
    message: {
        color: "#EFEFEF",
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    heading: {
        fontSize: 30,
        fontStyle: 'normal'
    }
});

export default WelcomeMessage;
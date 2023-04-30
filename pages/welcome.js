import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const logo = require('../assets/logo.png');

const WelcomeMessage = () => (
    <View style={styles.messageContainer}>
        <Text style={styles.message}>
            Welcome to GetAHobby! 
            {"\n\n"}
            Our app offers a range of options for every 
            interest and skill level, so whether you're 
            looking to relax, get creative, or learn 
            something new, we've got you covered. 
            {"\n\n"}
            Let's explore and find the perfect hobby for you!
        </Text>
    </View>
)

const GetStarted = () => (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Get Started!</Text>
        </Pressable>
    </View>
)

const Welcome = () => {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                  source={logo}
                  resizeMode='contain'
                  tintColor="#EDEDED" />
            </View>
            <WelcomeMessage />
            <GetStarted />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555'
    },
    logoContainer: {
        marginRight: 25,

    },
    messageContainer: {
        paddingHorizontal: 15,
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
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: 200,
        height: 50,
        borderWidth: 3,
        borderRadius: 100,
        borderColor: '#FFF',
        elevation: 10
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Welcome;
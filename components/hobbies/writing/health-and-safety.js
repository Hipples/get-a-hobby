import { View, Text, StyleSheet } from 'react-native';

const HealthAndSafety = () => (
    <View style={styles.healthAndSafetyContainer}>
        <Text style={styles.healthAndSafetyHeader}>
            Health & Safety:
        </Text>
        <Text style={styles.healthAndSafetyText}>
        Be careful with sitting too long at a desk and staring at a screen. Too much
        physical inactivity - however much your mind may be at work - can contribute
        to health issues such as with your heart.
        {'\n\n'}
        Eye strain may also result from staring at a computer screen if you choose to 
        write in that medium, which is often more convenient if less relaxing than 
        with tactile, analog materials like a notebook.
        </Text>
    </View>
);

const styles = StyleSheet.create({
    healthAndSafetyContainer: {
        height: 600,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    healthAndSafetyHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#338",
        padding: 5
    },
    healthAndSafetyText: {
        fontSize: 20,
        color: "#000",
        paddingVertical: 10
    }
});

export default HealthAndSafety;
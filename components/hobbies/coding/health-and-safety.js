import { View, Text, StyleSheet } from 'react-native';

const HealthAndSafety = () => (
    <View style={styles.healthAndSafetyContainer}>
        <Text style={styles.healthAndSafetyHeader}>
            Health & Safety:
        </Text>
        <Text style={styles.healthAndSafetyText}>
        Spending long hours sitting in front of a computer can lead to eye strain, back pain, and other health issues. Therefore, taking regular breaks, stretching, and maintaining proper posture is vital. Additionally, it's essential to be mindful of potential safety risks such as eye strain, repetitive strain injury, and cyber threats.
        {"\n\n"}
        Additionally, it is important to be mindful of cybersecurity threats and take appropriate measures to protect your devices and data. Regularly backing up your work and using antivirus software can help prevent loss of data and sensitive information. By prioritizing your health and safety, you can enjoy coding as a hobby while minimizing any potential risks.
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
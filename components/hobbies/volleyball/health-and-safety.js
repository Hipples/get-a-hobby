import { View, Text, StyleSheet } from 'react-native';

const HealthAndSafety = () => (
    <View style={styles.healthAndSafetyContainer}>
        <Text style={styles.healthAndSafetyHeader}>
            Health & Safety:
        </Text>
        <Text style={styles.healthAndSafetyText}>
        To play volleyball at the utmost level of competition, certain exercises
        should be performed. When performed on a regular basis, they will provide
        more agility, endurance, and strength while playing volleyball. These
        physical attributes are needed because volleyball players need 1. agility
        for quick reaction during fast-paced games; 2. endurance to maintain a
        high level of energy throughout games, and 3. strength for spiking,
        serving, and all of the other moves used in volleyball games. 
        {"\n\n"}
        Volleyball is a highly competitive sport. Consequently, injuries
        will happen. Some of the more common injuries are sprains and strains,
        especially to the ankle. In addition, injuries to the hand and finger,
        knee, and shoulder also occur. When playing volleyball, the actions of
        attacking (hitting or spiking) cause the most injuries. Blocking injuries
        often result in injuries to the finger or ankle, while spiking injuries
        occur frequently to the shoulder, knee, and ankle.
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
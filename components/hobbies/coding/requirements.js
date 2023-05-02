import { View, Text, StyleSheet } from 'react-native';

const Requirements = () => (
    <View style={styles.requirementsContainer}>
        <Text style={styles.requirementsHeader}>Requirements:</Text>
        <Text style={styles.requirementsText}>
            Getting started with coding as a hobby requires little more than a computer and an internet connection. While some programming languages may require specific software or tools, many are available for free online. 
            {"\n\n"}
            However, to make real progress, consistency in learning is essential. Dedication to regular practice, and a willingness to experiment with new concepts and techniques are key to mastering coding skills. As you progress, you may want to invest in additional resources like books or courses to deepen your knowledge and skills. But the most important requirement for coding as a hobby is a consistent effort to learn and grow. 
            {"\n\n"}
            With persistence, anyone can become a proficient coder and enjoy the limitless potential that coding offers.
        </Text>
    </View>
);

const styles = StyleSheet.create({
    requirementsContainer: {
        height: 700,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    requirementsHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#338",
        padding: 5
    },
    requirementsText: {
        fontSize: 20,
        color: "#000",
        paddingVertical: 10
    }
});

export default Requirements
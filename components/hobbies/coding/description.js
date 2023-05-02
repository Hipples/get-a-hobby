import { View, Text, StyleSheet } from 'react-native';

const Description = () => (
    <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>
            Coding is an incredibly fulfilling hobby that allows you to exercise your
            creativity and problem-solving skills. From creating simple programs to
            building complex applications, you can bring your ideas to life and share
            them with others.{'\n\n'}Additionally, the coding community is welcoming and collaborative,
            making it easy to connect with like-minded individuals and work on exciting
            projects. Start your coding journey today and discover a world of endless
            possibilities!
        </Text>
    </View>
);

const styles = StyleSheet.create({
    descriptionContainer: {
        height: 500,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    descriptionHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#338",
        padding: 5
    },
    descriptionText: {
        fontSize: 20,
        color: "#000",
        paddingVertical: 10
    }
});

export default Description;
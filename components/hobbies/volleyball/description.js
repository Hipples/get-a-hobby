import { View, Text, StyleSheet } from 'react-native';

const Description = () => (
    <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>
        Volleyball is a widely popular team sport played on a rectangular court
        divided evenly by a standing net. Two opposing teams, one on each side of
        the net, use primarily their hands to hit a spherical ball back and forth
        over an approximate 8 ft (2.4 m) net. The main types of volleyball are
        those played indoors on a hard floor, those played outside on grass, dirt,
        or other material, and those played outside on sand, what is commonly
        called beach volleyball. Because volleyball is an actively played sport,
        it helps to provide a healthy workout for all parts of the body.
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
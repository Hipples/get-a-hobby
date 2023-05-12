import { View, Text, StyleSheet } from 'react-native';

const Title = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Volleyball</Text>
    </View>
);

const styles = StyleSheet.create({
    titleContainer: {
        height: 75,
        borderWidth: 2,
        padding: 10,
        margin: 10
    },
    titleText: {
        textAlign: 'center',
        fontSize: 35,
        color: '#EFEFEF'
    }
});

export default Title;
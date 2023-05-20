import { View, Text, StyleSheet } from 'react-native';

const Title = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Writing</Text>
    </View>
);

const styles = StyleSheet.create({
    titleContainer: {
        height: 75,
        borderWidth: 0,
        padding: 10,
        margin: 10
    },
    titleText: {
        textAlign: 'center',
        fontSize: 44,
        color: '#EFEFEF'
    }
});

export default Title;
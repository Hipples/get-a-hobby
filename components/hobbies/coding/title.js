import { View, Text, StyleSheet } from 'react-native';

const Title = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Coding</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default Title;
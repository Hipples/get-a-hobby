import { View, Text, StyleSheet } from 'react-native';

const Favorites = () => (
    <View style={styles.container}>
        <Text>Saved Hobbies</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default Favorites;
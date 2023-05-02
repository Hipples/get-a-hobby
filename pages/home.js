import { View, StyleSheet, Pressable, Text } from 'react-native';


const Home = ({ navigation }) => (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Coding")}>
            <Text>Preview Coding</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#555"
    }
});

export default Home;
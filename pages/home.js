import { View, StyleSheet, Pressable, Text } from 'react-native';


const Home = ({ navigation }) => (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Hobbies")}>
            <Text>Hobbies</Text>
        </Pressable>
    </View>
);

import { colors } from '../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray
    }
});

export default Home;
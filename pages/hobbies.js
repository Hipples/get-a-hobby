import { View, StyleSheet } from 'react-native';

import Hobby from '../components/common/hobby';

const Hobbies = () => (
    <View style={styles.container}>
        <Hobby hobby='Coding'>Coding</Hobby>
        <Hobby hobby='Volleyball'>Volleyball</Hobby>
        <Hobby hobby='Writing'>Writing</Hobby>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#b1b5b9"
    }
});

export default Hobbies;
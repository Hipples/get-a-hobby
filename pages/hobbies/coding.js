import { View, StyleSheet } from 'react-native';

import Title from '../../components/hobbies/coding';

const Coding = () => (
    <View style={styles.container}>
        <Title />
        <Description />
    </View>
);

const styles = StyleSheet.create({
    container: {}
});

export default Coding;
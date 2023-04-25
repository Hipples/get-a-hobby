import { View, Image, StyleSheet } from 'react-native';

import Logo from '../components/logo';

const Welcome = () => (
    <View style={styles.container}>
        <Logo />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {}
});

export default Welcome;
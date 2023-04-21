import { View, StyleSheet } from 'react-native';

import Title from '../components/home/title';

const Home = () => (
    <View style={styles.container}>
        {/* <Header /> */}
        <Title />
    </View>
);

const styles = StyleSheet.create({
    container: {}
});

export default Home;
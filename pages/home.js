import { View, StyleSheet } from 'react-native';

import Title from '../components/home/title';
import Coding from '../pages/hobbies/coding';

const Home = () => (
    <View style={styles.container}>
        {/* <Header /> */}
        <Title />
        <Coding />
    </View>
);

const styles = StyleSheet.create({
    container: {backgroundColor:'#CCC'}
});

export default Home;
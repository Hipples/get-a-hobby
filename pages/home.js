import { View, StyleSheet } from 'react-native';

import Title from '../components/home/title';
import DifficultyRating from '../components/common/difficulty-rating';

const Home = () => (
    <View style={styles.container}>
        <Title />
        <DifficultyRating
            rating={5} />
    </View>
);

const styles = StyleSheet.create({
    container: {}
});

export default Home;
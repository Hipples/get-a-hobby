import { View, StyleSheet } from 'react-native';

import Title from '../../components/hobbies/coding/title';
import DifficultyRating from '../../components/hobbies/coding/difficulty-rating';
import Description from '../../components/hobbies/coding/description';

const Coding = () => (
    <View style={styles.container}>
        <Title /><DifficultyRating />
        <Description />
    </View>
);

const styles = StyleSheet.create({
    container: {}
});

export default Coding;
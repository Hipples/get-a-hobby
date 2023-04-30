import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const DifficultyRating = ({ rating }) => (
    <View style={styles.container}>
        <Rating 
            readonly={true}
            ratingCount={5}
            startingValue={rating}
            />
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {}
});

export default DifficultyRating;
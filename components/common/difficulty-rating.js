// more info on rating props can be found at the link below:
// https://github.com/Monte9/react-native-ratings

import { View, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const DifficultyRating = ({ rating }) => (
    <View style={styles.container}>
        <Rating 
            readonly={true}  // user cannot modify star display
            ratingCount={5}  // easy, novice, intermediate, advanced, expert
            startingValue={rating}  // sets number of filled stars to reflect rating
            />
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DifficultyRating;
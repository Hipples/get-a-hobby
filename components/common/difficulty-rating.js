// more info on rating props can be found at the link below:
// https://github.com/Monte9/react-native-ratings

import { View, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

import RatingLabel from './rating-label';

const DifficultyRating = ({ rating }) => (
    <View style={styles.container}>
        <RatingLabel />
        <Rating 
            tintColor="#666"  // background of stars container
            readonly={true}  // user cannot modify star display
            ratingCount={5}  // easy, novice, intermediate, advanced, expert
            startingValue={rating}  // sets number of filled stars to reflect rating
            style={styles.stars} />
    </View>
);

// can either be removed or updated if able to work across hobbies
const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 2,
        marginHorizontal: 10,
        marginBottom: 10
    },
    stars: {
        paddingHorizontal: 10
    },
});

export default DifficultyRating;
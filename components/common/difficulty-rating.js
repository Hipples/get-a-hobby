// more info on rating props can be found at the link below:
// https://github.com/Monte9/react-native-ratings

import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const DifficultyRating = ({ rating }) => (
    <View style={styles.container}>
        <Text style={styles.label}>Difficulty Rating</Text>
        <Rating 
            tintColor="#555"  // background of stars view 
            readonly={true}  // user cannot modify star display
            ratingCount={5}  // easy, novice, intermediate, advanced, expert
            startingValue={rating}  // sets number of filled stars to reflect rating
            style={styles.stars} />
    </View>
);

// can either be removed or updated if able to work across hobbies
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 2,
        marginHorizontal: 10,
        marginBottom: 2
    },
    label: {
        color: '#EFEFEF',
        fontSize: 18,
        paddingHorizontal: 10
    },
    stars: {
        paddingHorizontal: 10
    }
});

export default DifficultyRating;
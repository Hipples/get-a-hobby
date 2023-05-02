// more info on rating props can be found at the link below:
// https://github.com/Monte9/react-native-ratings

import { View, Text, Image, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const infoIcon = require('../../assets/info-icon.png')

const RatingLabel = () => (
    <View style={styles.labelContainer}>
        <Text style={styles.label}>
            Difficulty Rating
        </Text>
        <Image 
            source={infoIcon}
            resizeMode='contain' 
            style={styles.icon}/>
    </View>
);

const DifficultyRating = ({ rating }) => (
    <View style={styles.container}>
        <RatingLabel />
        <Rating 
            tintColor="#555"  // background of stars container
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
    stars: {
        paddingHorizontal: 10
    },
    labelContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    label: {
        fontSize: 20,
        color: '#EFEFEF'
    },
    icon: {
        height: 20,
    }
});

export default DifficultyRating;
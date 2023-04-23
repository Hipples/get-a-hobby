import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { star, emptyStar } from './stars';

const DifficultyRating = ({ rating }) => {
    const [stars, setStars] = useState({ emptyStar });

    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            setStars = { star } 
        } 
    }

    return (
        <View style={styles.container}>
            <Ionicons name='star' size={24} color='blue' />
            <Ionicons name='star' size={24} color='blue' />
            <Ionicons name='star' size={24} color='blue' />
            <Ionicons name='star-outline' size={24} color='blue' />
            <Ionicons name='star-outline' size={24} color='blue' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {}
});

export default DifficultyRating;
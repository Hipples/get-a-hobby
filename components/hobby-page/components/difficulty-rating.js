// more info on rating props can be found at the link below:
// https://github.com/Monte9/react-native-ratings

import { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Rating } from 'react-native-ratings';

import RatingInfo from './rating-info'

import { styles } from '../hobby-page-styles';

const infoIcon = require('../../../assets/info-icon.png'); 

const DifficultyRating = ({ rating }) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    
    return (
        <View style={styles.contentContainer}>
            <View style={styles.ratingHeader}>
                <Text style={styles.ratingHeaderText}>Difficulty Rating</Text>
                <RatingInfo 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible} />                
                <Pressable onPress={() => setModalVisible(true)}
                    style={styles.infoButton}>
                    <Image source={infoIcon}
                        style={styles.infoIcon} />
                </Pressable>
            </View>
            <Rating 
                type='custom'
                resize='contain'
                readonly={true}  // user cannot modify rating
                ratingCount={5}  // easy, novice, intermediate, advanced, expert
                startingValue={rating}  // sets number of filled stars to reflect rating
                style={styles.stars}
                imageSize={styles.stars.imageSize}
                tintColor={styles.container.backgroundColor}/>
        </View>
    );
}

export default DifficultyRating;
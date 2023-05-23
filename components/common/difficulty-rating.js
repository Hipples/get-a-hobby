// more info on rating props can be found at the link below:
// https://github.com/Monte9/react-native-ratings

import { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Rating } from 'react-native-ratings';

import RatingInfo from './rating-info'

const infoIcon = require('../../assets/info-icon.png');

const DifficultyRating = ( props ) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    
    return (
        <View style={props.stylesRatingContainer}>
            <View style={props.stylesHeader}>
                <Text style={props.stylesHeaderText}>Difficulty Rating</Text>
                <RatingInfo 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible} />                
                <Pressable onPress={() => setModalVisible(true)}
                    style={props.stylesInfoButton}>
                    <Image source={infoIcon}
                        style={props.stylesInfoIcon} />
                </Pressable>
            </View>
            <Rating 
                type='custom'
                resize='contain'
                readonly={true}  // user cannot modify star display
                ratingCount={5}  // easy, novice, intermediate, advanced, expert
                startingValue={props.rating}  // sets number of filled stars to reflect rating
                style={props.starPosition}
                imageSize={props.starSize} 
                tintColor={props.starBackground}/>
        </View>
    );
}

export default DifficultyRating;
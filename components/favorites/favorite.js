import { View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../hobby-page/hobby-page-styles';

import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';


const hobby = {
    id: "",
    name: '',
    image: {},
    saved: false
}

// toggles between the names "heart" (saved) and "heart-o" (default)
const Favorite = () => {
    const [ save, setSave ] = useState('heart-o')
    
    const saveHobby = (hobby) => {
        if (save === false) {
            setSave('heart')
        } else {
            setSave('heart-o');
        }
    }

    return (
        <View style={styles.favoriteContainer}>
            <Pressable onPress={(save) => saveHobby(save)}>
                <FontAwesome name={save} size={styles.heart.size} color={styles.heart.color} />
            </Pressable>
        </View>
    );
}

export default Favorite;
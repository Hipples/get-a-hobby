import { useState, useEffect } from 'react';
import { Text, View, Pressable, ActivityIndicator } from 'react-native';

import { useBoredContext } from '../../contexts/bored-context';
import { styles } from '../home/home-styles';


const Bored = () => {
    const { activity } = useBoredContext();


    return (
        <View>
                <Text style={styles.activity}>{activity}!</Text>
        </View>
    );
}

export default Bored;
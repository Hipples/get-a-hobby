import { useState, useEffect } from 'react';
import { Text, View, Pressable, ActivityIndicator } from 'react-native';

import { useBoredContext, useLoadingContext } from '../../contexts/bored-context';
import { styles } from './home-styles';

const RandomActivity = () => {
    const { activity } = useBoredContext();
    const { loading } = useLoadingContext();

    return (
        <View>
        { loading ?
            ( <ActivityIndicator size='large' /> ) : ( <Text style={styles.activity}>{activity}!</Text> )
        }
        </View>
    );
}

export default RandomActivity;
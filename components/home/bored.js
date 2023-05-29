import { useState, useEffect } from 'react';
import { Text, View, Pressable, ActivityIndicator } from 'react-native';

import { styles } from '../home/home-styles';

const Bored = () => {
    const [ isLoading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]);

    const url = 'http://www.boredapi.com/api/activity/';

    const getRandomActivity = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            console.log(data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }    

    useEffect(() => {
        getRandomActivity()
    }, []);

    return (
        <View>
            { isLoading ? (
                <ActivityIndicator size='large'/>
            ) : (
                <>
                <Pressable 
                    style={styles.activityContainer}
                    onPress={() => getRandomActivity()}>
                <Text style={styles.activity}>{data.activity}!</Text>
                </Pressable>
                </>
            )}
        </View>
    );
}

export default Bored;
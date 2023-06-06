import { Text, View, ActivityIndicator } from 'react-native';

import { useBoredContext, useLoadingContext } from '../../contexts/bored-context';

import { styles } from './home-styles';

const RandomActivity = () => {
    const { activity } = useBoredContext();
    const { loading } = useLoadingContext();

    return (
        <>
        { loading 
            ? ( 
                <View style={styles.activityContainer}>
                    <ActivityIndicator size='large' />
                </View> 
            ) : ( 
                <View style={styles.activityContainer}>
                    <Text style={styles.activity}>{activity}!</Text>
                </View>
            )
        }
        </>
    );
}

export default RandomActivity;
import { View, Text } from 'react-native';

import { styles } from './home-styles';
import { useUserContext } from '../../contexts/user-context';

const Intro = () => {   
    const { user } = useUserContext();
        
    return (
        <View style={styles.introContainer}>
            <Text style={styles.introText}>
                Hello {user}! {'\n'}
                Need a new activity to start right now?
            </Text>
        </View>
    );
}

export default Intro;
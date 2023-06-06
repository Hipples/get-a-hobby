import { View, Text } from 'react-native';

import { styles } from './home-styles';

const Intro = () => (
    <View style={styles.introContainer}>
        <Text style={styles.introText}>
            Need a new activity to start right now?
        </Text>
    </View>
);


export default Intro;
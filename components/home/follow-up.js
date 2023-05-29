import { View, Text } from 'react-native';

import { styles } from './home-styles';

const FollowUp = () => (
    <View style={styles.followUpContainer}>
        <Text style={styles.followUpText}>
            Not interested?{'\n'}Tap to see a new idea!
        </Text>
    </View>
);

export default FollowUp;
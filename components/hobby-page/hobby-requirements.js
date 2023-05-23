import { View, Text } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyRequirements = ({ requirements }) => (
    <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>Requirements</Text>
        <Text style={styles.contentText}>
            { requirements }
        </Text>
    </View>
);

export default HobbyRequirements;
import { View, Text } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyRequirements = ({ requirements }) => (
    <View style={styles.requirementsContainer}>
        <Text style={styles.requirementsHeader}>Requirements</Text>
        <Text style={styles.requirementsText}>
            { requirements }
        </Text>
    </View>
);

export default HobbyRequirements;
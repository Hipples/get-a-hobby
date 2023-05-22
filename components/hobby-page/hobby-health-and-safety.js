import { View, Text  } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyHealthAndSafety = ({ healthAndSafety }) => (
    <View style={styles.healthAndSafetyContainer}>
        <Text style={styles.healthAndSafetyHeader}>
            Health & Safety:
        </Text>
        <Text style={styles.healthAndSafetyText}>
            { healthAndSafety }
        </Text>
    </View>
);

export default HobbyHealthAndSafety;
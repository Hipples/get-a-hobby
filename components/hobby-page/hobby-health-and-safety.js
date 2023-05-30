import { View, Text  } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyHealthAndSafety = ({ healthAndSafety }) => (
    <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>
            Health & Safety
        </Text>
        <Text style={styles.contentText}>
            { healthAndSafety }
        </Text>
    </View>
);

export default HobbyHealthAndSafety;
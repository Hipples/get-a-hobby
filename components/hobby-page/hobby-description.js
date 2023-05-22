import { View, Text } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyDescription = ({ description }) => (
    <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>
            { description }
        </Text>
    </View>
);

export default HobbyDescription;
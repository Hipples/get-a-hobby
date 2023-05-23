import { View, Text } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyDescription = ({ description }) => (
    <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>Description</Text>
        <Text style={styles.contentText}>
            { description }
        </Text>
    </View>
);

export default HobbyDescription;
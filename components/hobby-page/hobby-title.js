import { View, Text } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyTitle = (props) => (
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.hobby}</Text>
    </View>
);

export default HobbyTitle;
import { View, Text } from 'react-native';

import Favorite from '../favorites/favorite';

import { styles } from './hobby-page-styles';

const HobbyTitle = (props) => (
    <View style={styles.titleContainer}>
        <Favorite />
        <Text style={styles.titleText}>{props.hobby}</Text>
    </View>
);

export default HobbyTitle;
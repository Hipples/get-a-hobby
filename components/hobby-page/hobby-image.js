import { View, Image } from 'react-native';

import { styles } from './hobby-page-styles';

const HobbyImage = ({ image }) => (
    <View style={styles.imageContainer}>
        <Image
            style={styles.image} 
            source={ image } />
    </View>
);

export default HobbyImage;
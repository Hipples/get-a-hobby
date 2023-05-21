import { Image, View } from 'react-native';

import { styles } from './welcome-styles';

const logo = require('../../assets/logo.png');

const DisplayLogo = () => (
    <View style={styles.logoContainer}>
        <Image 
            source={logo}
            style={styles.logo}></Image>  
    </View>
);

export default DisplayLogo;
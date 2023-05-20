import { View, Image } from 'react-native';

import { styles } from './welcome-styles';

const logo = require('../../assets/logo.png');

const DisplayLogo = () => (
    <View style={styles.logoContainer}>
        <Image 
            source={logo}
            style={styles.logo} />  
    </View>
);

export default DisplayLogo;
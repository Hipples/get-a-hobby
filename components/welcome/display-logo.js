import { Image } from 'react-native';

import { styles, LogoGradient } from './welcome-styles';

const logo = require('../../assets/logo.png');

const DisplayLogo = () => (
    <LogoGradient>
        <Image 
            source={logo}
            style={styles.logo}></Image>  
    </LogoGradient>
);

export default DisplayLogo;
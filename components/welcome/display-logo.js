import { View, Image, StyleSheet } from 'react-native';

//what do you think?
const logo = require('../../assets/logo.png');

const DisplayLogo = () => (
    <View style={styles.logoContainer}>
        <Image 
            source={logo}
            resizeMode='contain'
            //just off-white
            tintColor="#EFEFEF" />  
    </View>
);

const styles = StyleSheet.create({
    logoContainer: {
        //otherwise the y cuts off
        marginRight: 25,
        //lil extra space from top of phone
        marginTop: 30
    }  
});

export default DisplayLogo;
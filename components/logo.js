import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
    const logo = '../assets/logo.png';

    return (
        <View style={styles.container}>
            <Image uri={logo} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    image: {}
});

export default Logo;
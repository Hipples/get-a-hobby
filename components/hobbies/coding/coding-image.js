import { View, Image, StyleSheet } from 'react-native';

const codingImage = require('../../../assets/coding-image.png');

const CodingImage = () => (
    <View style={styles.imageContainer}>
        <Image
            style={styles.image} 
            source={codingImage}
            resizeMode='contain' />
    </View>
);

const styles = StyleSheet.create({
    imageContainer: {
        height: 300,
        marginHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: "#666"
    },
    image: {
        height: 350,
        width: 350
    }
});

export default CodingImage;
import { View, Image, StyleSheet } from 'react-native';

const codingImage = require('../../../assets/writing_desk.jpeg');

const DisplayImage = () => (
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
        borderWidth: 0,
        backgroundColor: "#666"
    },
    image: {
        height: 400,
        width: 375

    }
});

export default DisplayImage;
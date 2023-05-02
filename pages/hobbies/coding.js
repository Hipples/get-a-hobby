import { ScrollView, StyleSheet } from 'react-native';

import { View, Text, Image } from 'react-native'

import DifficultyRating from '../../components/common/difficulty-rating';

const codingImage = require('../../assets/coding-image.png')

const HobbyTitle = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Coding</Text>
    </View>
);

const HobbyImage = () => (
    <View style={styles.imageContainer}>
        <Image
            style={styles.image} 
            source={codingImage}
            resizeMode='contain' />
    </View>
);

const HobbyDifficulty = () => (
    <DifficultyRating rating={3} />
)

const Coding = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <HobbyTitle />
        <HobbyImage />
        <HobbyDifficulty />
        {/*}<HobbyDescription />
        <HobbyResources /> */}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: "#555"
    },
    titleContainer: {
        flex: 1,
        borderWidth: 2,
        padding: 10,
        margin: 10
    },
    titleText: {
        textAlign: 'center',
        fontSize: 35,
        color: '#EFEFEF'
    },
    imageContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: "#999"
    },
    image: {
        height: 300,
        width: 300,
        
    }
});

export default Coding;
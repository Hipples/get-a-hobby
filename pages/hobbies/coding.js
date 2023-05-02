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

const HobbyDescription = () => (
    <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionLabel}>Description:</Text>
        <Text style={styles.descriptionText}>
        Coding is an incredibly fulfilling hobby that allows you to exercise your creativity and problem-solving skills. From creating simple programs to building complex applications, you can bring your ideas to life and share them with others. The coding community is welcoming and collaborative, making it easy to connect with like-minded individuals and work on exciting projects. Start your coding journey today and discover a world of endless possibilities!
        </Text>
    </View>
)

const Coding = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        overScrollMode='always' 
        persistentScrollbar={true} >
        <HobbyTitle />
        <HobbyImage />
        <HobbyDifficulty />
        <HobbyDescription />
        {/* <HobbyResources /> */}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: "#666"
    },
    titleContainer: {
        height: 75,
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
        height: 250,
        marginHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: "#666"
    },
    image: {
        height: 250,
        width: 250,
    },
    descriptionContainer: {
        height: 400,
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10
    },
    descriptionLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#EFEFEF"
    },
    descriptionText: {
        fontSize: 20,
        color: "#EFEFEF"
    }
});

export default Coding;
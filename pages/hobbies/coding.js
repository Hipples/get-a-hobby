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

const HobbyRequirements = () => (
    <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionLabel}>Requirements:</Text>
        <Text style={styles.descriptionText}>
            Getting started with coding as a hobby requires little more than a computer and an internet connection. While some programming languages may require specific software or tools, many are available for free online. 
            {"\n\n"}
            However, to make real progress, consistency in learning is essential. Dedication to regular practice, and a willingness to experiment with new concepts and techniques are key to mastering coding skills. As you progress, you may want to invest in additional resources like books or courses to deepen your knowledge and skills. But the most important requirement for coding as a hobby is a consistent effort to learn and grow. 
            {"\n\n"}
            With persistence, anyone can become a proficient coder and enjoy the limitless potential that coding offers.
        </Text>
    </View>
);

const HobbyHealthAndSafety = () => (
    <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionLabel}>
            Health & Safety:
        </Text>
        <Text style={styles.descriptionText}>
        Spending long hours sitting in front of a computer can lead to eye strain, back pain, and other health issues. Therefore, taking regular breaks, stretching, and maintaining proper posture is vital. Additionally, it's essential to be mindful of potential safety risks such as eye strain, repetitive strain injury, and cyber threats.
        {"\n\n"}
        Additionally, it is important to be mindful of cybersecurity threats and take appropriate measures to protect your devices and data. Regularly backing up your work and using antivirus software can help prevent loss of data and sensitive information. By prioritizing your health and safety, you can enjoy coding as a hobby while minimizing any potential risks.
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
        <HobbyRequirements />
        <HobbyHealthAndSafety />
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
        height: 700,
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10
    },
    descriptionLabel: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#EFEFEF"
    },
    descriptionText: {
        fontSize: 20,
        color: "#EFEFEF"
    }
});

export default Coding;
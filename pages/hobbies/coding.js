import { ScrollView, StyleSheet } from 'react-native';

import { View, Text, Image, Dimensions, SafeAreaView } from 'react-native'

import Title from '../../components/hobbies/coding/title';
import DifficultyRating from '../../components/common/difficulty-rating';
import Description from '../../components/hobbies/coding/description';

const codingImage = require('../../assets/coding-image.png')

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
);

const codingTips = [
    {
        tip: 1,
        title: "Build Projects That Excite You!",
        explanation: "Coding can be a lot of fun when you're working on something that interests you!\n\nChoose projects that inspire you, whether it's creating a game, building a website, or automating a task you find repetitive."
    },{
        tip: 2,
        title: "Dont Be Afraid to Ask for Help!",
        explanation: "The coding community is incredibly supportive, so don't hesitate to reach out to others for help and guidance.\n\nThere are plenty of online forums and communities where you can connect with other coders and learn from their experiences.\n\nCheck out the resources section below if you are unsure where to start!"
    },{
        tip: 3,
        title: "Play with Different Programming Languages!",
        explanation: "Don't be afraid to try different programming languages and tools to find the ones that work best for you.\n\nEach language has its own strengths and weaknesses, and you may find that you enjoy certain languages more than others.\n\nThis application was built using React Native with an Expo framework!",
    },{
        tip: 4,
        title: "Experiment and Make Mistakes!",
        explanation: "Making mistakes is a natural part of the learning process.\n\nSo, don't be afraid to experiment and try new things, even if it means making errors along the way.\n\nLearning from your mistakes is an important part of becoming a better coder.",
    },{
        tip: 5,
        title: "Keep Learning!",
        explanation: "The world of coding is constantly evolving, with new technologies and techniques emerging all the time.\n\nSo, make sure to stay up-to-date with the latest trends and developments by reading blogs, attending webinars, and taking online courses.\n\nContinuous learning is essential to stay ahead of the game and to keep enjoying coding as a hobby."
    }]

const item_width = Dimensions.get('window').width

const HobbyTips = () => {

    return (
    <SafeAreaView>
        <ScrollView 
            horizontal={true}
            snapToInterval={item_width}
            bounces={false}
            showsHorizontalScrollIndicator={false}>
        {codingTips.map((each) => {
            return (
                <View key={each.tip} style={styles.tipContainer}>
                    <Text style={styles.tipHeader}>Tip #{each.tip}</Text>
                    <Text style={styles.tipTitle}>{each.title}</Text>
                    <Text style={styles.tipText}>{each.explanation}</Text>
                </View>
            );
        })}
        </ScrollView>
    </SafeAreaView>
)}

const Coding = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        overScrollMode='always' 
        persistentScrollbar={true} >
        <Title />
        <HobbyImage />
        <HobbyDifficulty />
        <Description />
        <HobbyRequirements />
        <HobbyHealthAndSafety />
        <HobbyTips />
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: "#666"
    },
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
        width: 350,
    },

    tipContainer: {
        justifyContent: 'space-around',
        height: 600,
        width: item_width-20,
        backgroundColor: '#a8a',
        borderWidth: 3,
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        elevation: 5,
        shadowColor: '#fff',
    },
    tipHeader: {
        textAlign: 'center',
        fontSize: 50,
        color: '#335',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    tipTitle: {
        textAlign: 'center',
        fontSize: 35,
        color: '#335',
        fontStyle: 'italic',
        padding: 10,
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: '#333',
        textShadowRadius: 2
    },
    tipText: {
        fontSize: 20,
        paddingHorizontal: 5,
        paddingVertical: 10,
        color: '#335',
        textAlign: 'justify',
        textShadowOffset: {width: -1, height: 1},
        textShadowColor: '#337',
        textShadowRadius: 1
    }
});

export default Coding;
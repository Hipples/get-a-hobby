import { ScrollView, StyleSheet } from 'react-native';

import { View, Text, Image, Dimensions, SafeAreaView } from 'react-native'

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
);

const codingTips = [
    {
        tip: 1,
        title: "Build Projects That Excite You!",
        explanation: "Coding can be a lot of fun when you're working on something that interests you. So, choose projects that inspire you, whether it's creating a game, building a website, or automating a task you find repetitive."
    },{
        tip: 2,
        title: "Dont Be Afraid to Ask for Help!",
        explanation: "The coding community is incredibly supportive, so don't hesitate to reach out to others for help and guidance. There are plenty of online forums and communities where you can connect with other coders and learn from their experiences."
    },{
        tip: 3,
        title: "Experiment with Different Programming Languages!",
        explanation: "Don't be afraid to try different programming languages and tools to find the ones that work best for you. Each language has its own strengths and weaknesses, and you may find that you enjoy certain languages more than others.",
    },{
        tip: 4,
        title: "Experiment and Make Mistakes!",
        explanation: "Making mistakes is a natural part of the learning process. So, don't be afraid to experiment and try new things, even if it means making errors along the way. Learning from your mistakes is an important part of becoming a better coder.",
    },{
        tip: 5,
        title: "Keep Learning!",
        explanation: "The world of coding is constantly evolving, with new technologies and techniques emerging all the time. So, make sure to stay up-to-date with the latest trends and developments by reading blogs, attending webinars, and taking online courses. Continuous learning is essential to stay ahead of the game and to keep enjoying coding as a hobby."
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
                    <Text style={styles.tipHeader}>Tip {each.tip}</Text>
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
        <HobbyTitle />
        <HobbyImage />
        <HobbyDifficulty />
        <HobbyDescription />
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
    descriptionContainer: {
        height: 700,
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10
    },
    descriptionLabel: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#EFEFEF"
    },
    descriptionText: {
        fontSize: 20,
        color: "#EFEFEF"
    },
    tipContainer: {
        justifyContent: 'space-around',
        height: 500,
        width: item_width-20,
        backgroundColor: '#DDD',
        borderWidth: 3,
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        elevation: 2,
        shadowColor: '#000',

    },
    tipHeader: {
        textAlign: 'center',
        fontSize: 30,
        color: '#335',
        fontWeight: 'bold',

    },
    tipTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: '#335',
        fontStyle: 'italic',
        paddingHorizontal: 10,

    },
    tipText: {
        fontSize: 20,
        paddingHorizontal: 5,
        color: '#335',
        textAlign: 'justify'

    }
});

export default Coding;
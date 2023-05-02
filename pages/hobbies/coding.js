import { ScrollView, StyleSheet } from 'react-native';

import { View, Text, Dimensions, SafeAreaView } from 'react-native'

import Title from '../../components/hobbies/coding/title';
import DisplayImage from '../../components/hobbies/coding/display-image';
import Difficulty from '../../components/hobbies/coding/difficulty';
import Description from '../../components/hobbies/coding/description';
import Requirements from '../../components/hobbies/coding/requirements';

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
        index: 1,
        title: "Build Projects That Excite You!",
        explanation: "Coding can be a lot of fun when you're working on something that interests you!\n\nChoose projects that inspire you, whether it's creating a game, building a website, or automating a task you find repetitive."
    },{
        index: 2,
        title: "Dont Be Afraid to Ask for Help!",
        explanation: "The coding community is incredibly supportive, so don't hesitate to reach out to others for help and guidance.\n\nThere are plenty of online forums and communities where you can connect with other coders and learn from their experiences.\n\nCheck out the resources section below if you are unsure where to start!"
    },{
        index: 3,
        title: "Play with Different Programming Languages!",
        explanation: "Don't be afraid to try different programming languages and tools to find the ones that work best for you.\n\nEach language has its own strengths and weaknesses, and you may find that you enjoy certain languages more than others.\n\nThis application was built using React Native with an Expo framework!",
    },{
        index: 4,
        title: "Experiment and Make Mistakes!",
        explanation: "Making mistakes is a natural part of the learning process.\n\nSo, don't be afraid to experiment and try new things, even if it means making errors along the way.\n\nLearning from your mistakes is an important part of becoming a better coder.",
    },{
        index: 5,
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
                <View key={each.index} style={styles.tipContainer}>
                    <Text style={styles.tipHeader}>Tip #{each.index}</Text>
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
        persistentScrollbar={true} >
        <Title />
        <DisplayImage />
        <Difficulty />
        <Description />
        <Requirements />
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
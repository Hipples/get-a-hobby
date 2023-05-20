import { View, Text, StyleSheet } from 'react-native';

const Requirements = () => (
    <View style={styles.requirementsContainer}>
        <Text style={styles.requirementsHeader}>Requirements:</Text>
        <Text style={styles.requirementsText}>
            Getting started with writing needs nothing more than a way to write down
            your thoughts - and to have some thoughts to write down! Materials-wise,
            a computer is very common these days due to its convenience, since you
            can use spell checks, digital storage, and internet communication to
            increase your productivity and the reliability of keeping your work safe.
            There are more and more useful software tools such as Scrivener, which
            allows you to organize your work, such as scene by scene on a digital
            corkboard if you're writing a fiction novel.
            {'\n\n'}
            However, many people prefer more tactile and analog materials, such as
            pen and paper or a notebook, or in some cases even a typewriter. These
            indeed have a very satisfying feel to them. They can bring out the
            romance of writing in a way that a computer can't. They do come with
            additional difficulties, though. You will inevitably write slower with
            such materials. Even a typewriter frequently requires wrangling to get
            a desired result. Modern computers tend to Just Work. However, they are
            likely much cheaper than computers, with even a typewriter in the low
            hundreds of dollars; and a pen and paper much cheaper than that!
        </Text>
    </View>
);

const styles = StyleSheet.create({
    requirementsContainer: {
        height: 700,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    requirementsHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#338",
        padding: 5
    },
    requirementsText: {
        fontSize: 20,
        color: "#000",
        paddingVertical: 10
    }
});

export default Requirements
import { View, Text, StyleSheet } from 'react-native';

const Description = () => (
    <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>
            Writing is a fulfilling way to express your thoughts and illustrate 
            concepts. It can be used to indulge in crazy fantasies or to make sense
            of the world around you. Most people only need a basic amount of
            training and practice to try one of the several forms of writing. 
            {'\n\n'}
            Creative writing is the most common, as it is intensely personal, and
            it can manifest exciting tales and adventures. By exporing the fictional
            characters, we can grapple with our own humanity as lived in our social
            environments at an intimate level. It can be a way to explore philosophies
            and speculative ideas about the world or even the universe, with little to
            no restrictions from realism. 
            {'\n\n'} 
            There is argumentative writing, which seeks to logically distill frequently
            adversarial concepts to advocate for a particular position. There is also 
            academic writing, which tends to be more descriptively prosaic in nature. 
            These can often be combined, and are essentially the basis for column and 
            blog writing in mass media. They may thus be used personally as well as 
            professionally. 
            {'\n\n'} 
            Finally, we have technical writing, which is a subset of academic 
            descriptive writing. Here, the focus is explaining the details, features, 
            and use of a certain technology or platform. This last form of writing is 
            most often used in corporate or industrial settings, but may be used in 
            conjunction with hobbies like coding to express to the world the things you 
            create.
        </Text>
    </View>
);

const styles = StyleSheet.create({
    descriptionContainer: {
        height: 500,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    descriptionHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#338",
        padding: 5
    },
    descriptionText: {
        fontSize: 20,
        color: "#000",
        paddingVertical: 10
    }
});

export default Description;
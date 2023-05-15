import { View, Text, StyleSheet } from 'react-native';

const Requirements = () => (
    <View style={styles.requirementsContainer}>
        <Text style={styles.requirementsHeader}>Requirements:</Text>
        <Text style={styles.requirementsText}>
        Warming up before playing volleyball is critical so muscles can
        be best prepared for all of the physical activities involved in
        the game. Five or so minutes of light exercise will prepare the
        body for the physical actions found within volleyball. Stretching
        exercises are also recommended. However, stretching should be done
        after other exercises so muscles are not injured. After playing
        volleyball, spend another five minutes to cool down. Light exercises
        or walking helps to return the body to its resting state. Stretching
        afterward is also recommended.
        {"\n\n"}
        These are the basic volleyball skills:
        {"\n"}
        Block: The use of front-row players to jump up high in the air near
        the net with hands and arms held high in the air for the purpose of
        hitting a spiked ball back to the opposing team or detouring the spiked
        ball so a teammate can return it over the net
        {"\n"}
        Dig: An underarm pass made with the forearms
        {"\n"}
        Set: A well-positioned ball placed high in the air and usually near the
        net for a teammate to hit with a strong overhead shot called a spike
        {"\n"}
        Spike: An aggressively hit ball that goes flying over the net at a high
        speed; it involves the player jumping very high and hitting the ball while
        it is high in the air
        {"\n"}
        Tip: Also called a placement, a slightly hit ball that is deflected or
        dropped unexpectedly into the court of the opposing team
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
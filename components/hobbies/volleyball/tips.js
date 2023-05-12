import { Dimensions, SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

import codingTips from '../../../constants/volleyball-tips';

const item_width = Dimensions.get('window').width

const Tips = () => (
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
);

const styles = StyleSheet.create({
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
})

export default Tips;
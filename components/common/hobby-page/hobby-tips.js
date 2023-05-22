import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import { styles, itemWidth } from './hobby-page-styles';

const HobbyTips = ({ tips }) => (
    <SafeAreaView>
        <ScrollView 
            horizontal={true}
            snapToInterval={itemWidth}
            bounces={false}
            showsHorizontalScrollIndicator={false}>
        {tips.map((tip) => {
            return (
                <View key={tip.index} style={styles.tipContainer}>
                    <Text style={styles.tipHeader}>Tip #{tip.index}</Text>
                    <Text style={styles.tipTitle}>{tip.title}</Text>
                    <Text style={styles.tipText}>{tip.explanation}</Text>
                </View>
            );
        })}
        </ScrollView>
    </SafeAreaView>
);

export default HobbyTips;
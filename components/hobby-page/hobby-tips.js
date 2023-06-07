import { ScrollView, View, Text } from 'react-native';

import { styles, screenWidth, TipsGradient } from './hobby-page-styles';

const HobbyTips = ({ tips }) => (
    <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>Tips!</Text>
        <ScrollView 
            contentContainerStyle={{flexDirection: 'row', justifyContent: 'space-evenly'}}
            horizontal={true}
            snapToInterval={screenWidth - 20}
            bounces={false}
            showsHorizontalScrollIndicator={false}>
        {tips.map((tip) => {
            return (               
                <TipsGradient key={tip.index}>
                    <Text style={styles.tipHeader}>#{tip.index}</Text>   
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={styles.tipTitle}>{tip.title}</Text>
                        <Text style={styles.tipText}>{tip.explanation}</Text>
                    </View>
                </TipsGradient>
            );
        })}
        </ScrollView>
    </View>
);

export default HobbyTips;
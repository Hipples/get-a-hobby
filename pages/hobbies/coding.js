import { ScrollView, StyleSheet } from 'react-native';

import HobbyTitle from '../../components/common/hobby-pages/hobby-title';
import DisplayImage from '../../components/hobbies/coding/display-image';
import Difficulty from '../../components/hobbies/coding/difficulty';
import Description from '../../components/hobbies/coding/description';
import Requirements from '../../components/hobbies/coding/requirements';
import HealthAndSafety from '../../components/hobbies/coding/health-and-safety';
import Tips from '../../components/hobbies/coding/tips';

import { View } from 'react-native';
import AddLink from '../../components/common/hyperlink';
import codingResources from '../../constants/coding-resources';

const Resources = () => (
    <View style={styles.resourcesContainer}>
        {codingResources.map((link) => (
            <View key={link.index}>
                <AddLink url={link.url}>{link.title}{'\n'}</AddLink>
            </View>
        ))}
    </View>
);

const Coding = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby="Coding" />
        <DisplayImage />
        <Difficulty />
        <Description />
        <Requirements />
        <HealthAndSafety />
        <Tips />
        <Resources />

    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: "#666"
    },
    resourcesContainer: {
        height: 500,
        borderWidth: 2,
        marginHorizontal: 10
    }
});

export default Coding;
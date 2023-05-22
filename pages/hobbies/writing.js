import { ScrollView, StyleSheet } from 'react-native';

import Title from '../../components/hobbies/writing/title';
import DisplayImage from '../../components/hobbies/writing/display-image';
import Difficulty from '../../components/hobbies/writing/difficulty';
import Description from '../../components/hobbies/writing/description';
import Requirements from '../../components/hobbies/writing/requirements';
import HealthAndSafety from '../../components/hobbies/writing/health-and-safety';
import Tips from '../../components/hobbies/writing/tips'

import { View } from 'react-native';
import AddLink from '../../components/common/hyperlink';
import writingResources from '../../constants/writing-resources';

const Resources = () => (
    <View style={styles.resourcesContainer}>
        {writingResources.map((link) => (
            <View key={link.index}>
                <AddLink url={link.url}>{link.title}{'\n'}</AddLink>
            </View>
        ))}
    </View>
);

const Writing = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <Title />
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
        backgroundColor: "#666",
        padding: 15
    },
    resourcesContainer: {
        height: 730,
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 20
    }
});

export default Writing;
import { ScrollView, StyleSheet } from 'react-native';

import HobbyTitle from '../../components/common/hobby-pages/hobby-title';
import DisplayImage from '../../components/hobbies/volleyball/display-image';
import Difficulty from '../../components/hobbies/volleyball/difficulty';
import Description from '../../components/hobbies/volleyball/description';
import Requirements from '../../components/hobbies/volleyball/requirements';
import HealthAndSafety from '../../components/hobbies/volleyball/health-and-safety';
import Tips from '../../components/hobbies/volleyball/tips';

import { View } from 'react-native';
import AddLink from '../../components/common/hyperlink';
import volleyballResources from '../../constants/volleyball-resources';

const Resources = () => (
    <View style={styles.resourcesContainer}>
        {volleyballResources.map((link) => (
            <View key={link.index}>
                <AddLink url={link.url}>{link.title}{'\n'}</AddLink>
            </View>
        ))}
    </View>
);

const Volleyball = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby="Volleyball" />
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

export default Volleyball;
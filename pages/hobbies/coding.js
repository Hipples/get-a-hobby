import { ScrollView, StyleSheet } from 'react-native';

import Title from '../../components/hobbies/coding/title';
import DisplayImage from '../../components/hobbies/coding/display-image';
import Difficulty from '../../components/hobbies/coding/difficulty';
import Description from '../../components/hobbies/coding/description';
import Requirements from '../../components/hobbies/coding/requirements';
import HealthAndSafety from '../../components/hobbies/coding/health-and-safety';
import Tips from '../../components/hobbies/coding/tips';

const Coding = () => (
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

    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: "#666"
    }
});

export default Coding;
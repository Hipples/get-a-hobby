import { ScrollView, StyleSheet } from 'react-native';

import HobbyTitle from '../../components/common/hobby-pages/hobby-title';
import DisplayImage from '../../components/hobbies/coding/display-image';
import Difficulty from '../../components/hobbies/coding/difficulty';
import Description from '../../components/hobbies/coding/description';
import Requirements from '../../components/hobbies/coding/requirements';
import HealthAndSafety from '../../components/hobbies/coding/health-and-safety';
import Tips from '../../components/hobbies/coding/tips';
import HobbyResources from '../../components/common/hobby-pages/hobby-resources';

import { styles } from '../../components/common/hobby-pages/hobby-page-styles'
import codingResources from '../../constants/coding-resources';

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
        <HobbyResources hyperlinks={codingResources}/>

    </ScrollView>
);

export default Coding;
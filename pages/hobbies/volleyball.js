import { ScrollView } from 'react-native';

import HobbyTitle from '../../components/common/hobby-page/hobby-title';
import HobbyImage from '../../components/common/hobby-page/hobby-image';
import HobbyDifficulty from '../../components/common/hobby-page/hobby-difficulty';
import HobbyDescription from '../../components/common/hobby-page/hobby-description';
import HobbyRequirements from '../../components/common/hobby-page/hobby-requirements';
import HealthAndSafety from '../../components/hobbies/volleyball/health-and-safety';
import HobbyTips from '../../components/common/hobby-page/hobby-tips';
import HobbyResources from '../../components/common/hobby-page/hobby-resources';

import { styles } from '../../components/common/hobby-page/hobby-page-styles'
import { description, requirements, tips, resources } from '../../constants/hobby-data/volleyball-data';

const image = require('../../assets/volleyball.png');

const Volleyball = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby="Volleyball" />
        <HobbyImage image={image} />
        <HobbyDifficulty rating={5} />
        <HobbyDescription description={description} />
        <HobbyRequirements HobbyRequirements={requirements} />
        <HealthAndSafety />
        <HobbyTips tips={tips} />
        <HobbyResources hyperlinks={resources} />
    </ScrollView>
);

export default Volleyball;
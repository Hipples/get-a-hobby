import { ScrollView } from 'react-native';

import HobbyTitle from '../../components/common/hobby-page/hobby-title';
import HobbyImage from '../../components/common/hobby-page/hobby-image';
import HobbyDifficulty from '../../components/common/hobby-page/hobby-difficulty';
import HobbyDescription from '../../components/common/hobby-page/hobby-description';
import HobbyRequirements from '../../components/common/hobby-page/hobby-requirements';
import HealthAndSafety from '../../components/hobbies/coding/health-and-safety';
import HobbyTips from '../../components/common/hobby-page/hobby-tips';
import HobbyResources from '../../components/common/hobby-page/hobby-resources';

import { styles } from '../../components/common/hobby-page/hobby-page-styles'
import { description, requirements, tips, resources } from '../../constants/hobby-data/coding-data';

const image = require('../../assets/coding.png');

const Coding = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby="Coding" />
        <HobbyImage image={image} />
        <HobbyDifficulty rating={3} />
        <HobbyDescription description={description}/>
        <HobbyRequirements requirements={requirements}/>
        <HealthAndSafety />
        <HobbyTips tips={tips} />
        <HobbyResources hyperlinks={resources}/>
    </ScrollView>
);

export default Coding;